package com.limvik.fielddependencyinjection;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

public class DIContainer {
    private Map<Class<?>, Object> instances = new HashMap<>();

    <T> T getInstance(Class<T> clazz) throws Exception {
        if (!instances.containsKey(clazz)) {
            T instance = createInstance(clazz);
            instances.put(clazz, instance);
        }
        return (T) instances.get(clazz);
    }

    private <T> T createInstance(Class<T> clazz) throws Exception {
        T instance = clazz.getDeclaredConstructor().newInstance();
        for (Field field : clazz.getDeclaredFields()) {
            if (field.isAnnotationPresent(Inject.class)) {
                Object dependency = getInstance(field.getType());
                boolean wasAccessible = field.canAccess(instance);
                field.setAccessible(true);
                field.set(instance, dependency);
                field.setAccessible(wasAccessible);
            }
        }
        return instance;
    }
}

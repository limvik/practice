package com.limvik.constructordependencyinjection;

import java.lang.reflect.Constructor;
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
        Constructor<T> constructor = getInjectConstructor(clazz);
        if (constructor == null) {
            return clazz.getDeclaredConstructor().newInstance();
        } else {
            return constructor.newInstance(getDependencies(constructor));
        }
    }

    private <T> Constructor<T> getInjectConstructor(Class<T> clazz) {
        for (Constructor<?> constructor : clazz.getDeclaredConstructors()) {
            if (constructor.isAnnotationPresent(Inject.class)) {
                return (Constructor<T>) constructor;
            }
        }
        return null;
    }

    private Object[] getDependencies(Constructor<?> constructor) throws Exception {
        Class<?>[] paramTypes = constructor.getParameterTypes();
        Object[] dependencies = new Object[paramTypes.length];
        for (int i = 0; i < paramTypes.length; i++) {
            dependencies[i] = getInstance(paramTypes[i]);
        }
        return dependencies;
    }
}

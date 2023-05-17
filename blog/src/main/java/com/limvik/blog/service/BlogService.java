package com.limvik.blog.service;

import com.limvik.blog.domain.Article;
import com.limvik.blog.dto.AddArticleRequest;
import com.limvik.blog.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class BlogService {

    private final BlogRepository blogRepository;

    public Article save(AddArticleRequest request) {
        return blogRepository.save(request.toEntity());
    }
}
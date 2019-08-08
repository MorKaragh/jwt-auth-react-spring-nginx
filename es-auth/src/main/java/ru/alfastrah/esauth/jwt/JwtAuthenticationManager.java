package ru.alfastrah.esauth.jwt;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtAuthenticationManager implements AuthenticationManager {

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        if (authentication.getCredentials().equals("123321") && authentication.getPrincipal().equals("admin")) {
            return new UsernamePasswordAuthenticationToken(authentication.getPrincipal(),authentication.getCredentials(),new ArrayList<>());
        }
        throw new BadCredentialsException("логин-пароль не правильные");
    }
}

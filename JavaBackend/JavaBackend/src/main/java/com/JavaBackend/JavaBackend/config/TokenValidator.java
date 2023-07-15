//package com.JavaBackend.JavaBackend.config;
//
//import org.keycloak.KeycloakSecurityContext;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//
//@Component
//public class TokenValidator {
//
//    @Autowired
//    private KeycloakSecurityContext keycloakSecurityContext;
//
//    public boolean validateToken() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if (authentication != null && authentication.getPrincipal() instanceof KeycloakSecurityContext) {
//            KeycloakSecurityContext context = (KeycloakSecurityContext) authentication.getPrincipal();
//            return context.getToken().isActive();
//        }
//        return false;
//    }
//}
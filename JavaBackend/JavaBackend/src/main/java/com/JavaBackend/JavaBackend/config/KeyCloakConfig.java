package com.JavaBackend.JavaBackend.config;///*package com.JavaBackend.JavaBackend.config;
//
//import org.keycloak.KeycloakSecurityContext;
//import org.springframework.context.annotation.Bean;
//import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.core.context.SecurityContextHolder;
//
//@Configuration
//public class KeyCloakConfig {
//    @Bean
//    public KeycloakSpringBootConfigResolver keycloakConfigResolver() {
//        return new KeycloakSpringBootConfigResolver();
//    }
//
//    @Bean
//    public KeycloakSecurityContext keycloakSecurityContext(){
//        return new KeycloakSecurityContext();
//    }
//
//}*/

import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KeyCloakConfig {

  @Bean
  public KeycloakSpringBootConfigResolver keycloakConfigResolver() {
    return new KeycloakSpringBootConfigResolver();
  }
}

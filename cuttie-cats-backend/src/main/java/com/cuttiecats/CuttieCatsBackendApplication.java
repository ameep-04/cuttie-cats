
package com.cuttiecats;

import com.cuttiecats.cat.Cat;
import com.cuttiecats.cat.CatRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CuttieCatsBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(CuttieCatsBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner seedCats(CatRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Cat(
                        "Max", "Persian", "3 months", "Male", "Contact us",
                        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=900,"
                                + "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900,"
                                + "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=900",
                        "A sweet, curious companion who loves attention and cosy naps.",
                        true
                ));

                repository.save(new Cat(
                        "Luna", "British Shorthair", "4 months", "Female", "Contact us",
                        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900,"
                                + "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=900",
                        "A gentle and playful friend with a calm, affectionate personality.",
                        true
                ));

                repository.save(new Cat(
                        "Milo", "Ragdoll", "2 months", "Male", "Contact us",
                        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=900,"
                                + "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900",
                        "A fluffy little explorer who loves playtime and companionship.",
                        true
                ));
            }
        };
    }
}

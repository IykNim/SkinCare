package com.skincare.controller;

import com.skincare.model.User;
import com.skincare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String registerUser(@RequestParam String name,
                               @RequestParam String email,
                               @RequestParam String password,
                               @RequestParam String confirmpassword,
                               RedirectAttributes redirectAttributes) {

        if (!password.equals(confirmpassword)) {
            redirectAttributes.addFlashAttribute("error", "Passwords do not match");
            return "redirect:/auth.html#signup";
        }
        if (name.isBlank() || email.isBlank() || password.isBlank()) {
            redirectAttributes.addFlashAttribute("error", "All fields are required");
            return "redirect:/auth.html#signup";
        }

        if (userRepository.existsByEmail(email)) {
            redirectAttributes.addFlashAttribute("error", "Email already exists");
            return "redirect:/auth.html#signup";
        }

        User user = new User(name, email, password);
        userRepository.save(user);
        redirectAttributes.addFlashAttribute("success", "Registration successful");

        return "redirect:/auth.html";  // redirect to login page after signup
    }
}

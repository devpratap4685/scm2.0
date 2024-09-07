package com.scm.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class PageController {
  
        @RequestMapping("/home")
        public  String home( Model model ){
        System.out.println("Home Page handler");
        model.addAttribute("name","Substring Technologies" );
        model.addAttribute("youtubeChannel","https://www.youtube.com/watch?v=-K-WY0WRT48 ");
        return "home";

    }
        // about route
          @RequestMapping("/about")
          public String aboutPage(Model model){
          model.addAttribute("isLogin", true);
          System.out.println("About page loading");
          return "about";
        }


        @RequestMapping("/services")
        public String servicesPage(){
        System.out.println("services page loading");
        return "services";
       }
      // contact page

        @GetMapping("/contact")
         public String contact() {
          return new String("contact");
        }
         @GetMapping("/login")
         public String login() {
         return new String("login");
         }
         @GetMapping("/register")
         public String register() {
          return "register";
         }  



}

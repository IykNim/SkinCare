package com.skincare.model;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int UserID;

    @Column(nullable = false, length = 50,name = "Name")
    private String Name;

    @Column(nullable = false, length = 50, unique = true, name = "Email")
    private String email;

    @Column(nullable = false, length = 50, name = "Password")
    private String Password;

    public User(String name, String email, String password) {
        this.Name = name;
        this.email = email;
        this.Password = password;
    }

    // Getters and Setters
    public int getUserID() { return UserID; }
    public void setUserID(int userID) { UserID = userID; }

    public String getName() { return Name; }
    public void setName(String name) { Name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { email = email; }

    public String getPassword() { return Password; }
    public void setPassword(String password) { Password = password; }
}
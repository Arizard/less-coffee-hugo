---
title: "Intro to JSON Web Tokens"
date: 2021-07-26T17:56:04+10:00
draft: true
---

## Abstract

JWT (JSON Web Token) authentication is a concept that you will frequently encounter as a software engineer. It has become somewhat of a SaaS industry standard to implement a JWT-based authentication flow. 

This article is an introduction into JWT, and the expected audience of this article is engineers who have little to no prior understanding of JWT. The article covers the how JWT is used to authenticate users in a web service (this is at an *abstract* level, conveniently skipping some technical details for brevity).

This article refers to the term JWT, but in reality it only covers the **JWS** (JSON Web Signature) implementation of JWT.

## JWT Usage Example

Sometimes the easiest way to "get the big picture" is an example (my preference is whiteboard diagrams):

{{< figure src="simple-jwt-flow.png" width="100%" alt="Diagram of simple JWT flow" caption="Whiteboard diagram of simple JWT flow." >}}

1. Client logs in via endpoint `/login`
2. Server generates a JWT and returns it to the Client in the response.
3. Client attempts to view the `/profile` endpoint, which should display the profile of the currently logged in user. The Client attaches the following request header, which contains the JWT:

    ```
    Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2MjcyODMyNjUsImlhdCI6MTYyNzI4Mjk2NSwibmJmIjoxNjI3MjgyOTY1LCJqdGkiOiIxdnFJMDJyRnBLeTFEQzZsanN4R2YzTk1wNnAiLCJhdWQiOiJhcGkuZGVwdXR5LmNvbVwvY29tcGxpYW5jZVwvdjEiLCJkcC51aWQiOiJlZjE3MmRhNS1hNTQ2LTQzZDgtOGViNC01ODBhODIxMDM5ZTkiLCJkcC5iaWQiOiJlYjY2YTUzOS0yYWJhLTQ5MzUtYTI1MC03NTNmZTVlOWU2YmYiLCJkcC5laWQiOjEsImRwLmJ1aWQiOiIxIiwiZHAuYmxpZCI6IjEifQ.4rRZOaSTvv5S0754eObi_kT2gGLs92wdHGCHay2I_UTDU1cKu03O-5m9c5fwlA1Op9RtFJlQO7jmyqVLcuGrHA
    ```

4. The Server validates the JWT provided in the `Authorization` header. It is valid. **The Server knows which user is logged in based on the contents of the JWT.**
5. The Server returns the profile for the current user in the response.

## Components of the JWT

The JWT, represented as text, has 3 components, separated by period (`.`):

1. *JOSE Header* (***J**avascript **O**bject **S**igning and **E**ncryption*)

    The header is a JSON object which contains some information about the JWT itself, notably: `alg` (the signature algorithm). This will be used to sign the JWT.

2. *Claims Set*

    This is a JSON object which contains a set of fields that the bearer of the JWT "claims" to be true. It might contain the subject `sub`, issued at timestamp `iat`, and more claims. The *Claims Set* could also contain information about the **identity** of the user, the user's **role**, and **which resources the user can access**. A lot of information can be stored in the JWT, however the main consideration here is performance — how many bytes the JWT takes up.

3. *Signature*

    The signature is used by the server-side application to validate the authenticity of the token. An invalid (e.g. forged) token will have an invalid signature.

The *Header* and *Claims Set* are **base64 encoded** to make them safe to use in HTTP headers.

## Cryptography: How The Signature Provides Security

The *signature* in the JWT created by combining the *Claims Set* and a *Secret*, then applying the hashing function specified in the *JOSE Header*.

{{< figure src="cryptography.png" width="100%" alt="Diagram of how the JWT is signed." caption="Whiteboard diagram of how the JWT is signed." >}}

The secret is only known server-side. This means that because the issuer has provided the user with a *Claims Set*, then signed the token using the *Secret*, the user (or an attacker) is unable to modify the *Claims Set* without knowing the *Secret* -- they can't sign the modified token. 

On the server-side, the application can validate the *Claims Set* by calculating the same signature — if the signature does not match, then the JWT is invalid.

## Other Use Cases

### Propagation of Credentials

One nice property of JWT is portability. In a system with distributed architecture, there may be multiple services operating over potentially insecure connections. The JWT from one request can be forwarded as part of another request — therefore the credentials (defined by the *Claims Set*) of the user can be propagated throughout a distributed system.

## Extension Activity

One advantage of JWT is that once it is issued, the server-side application does not need to make any network requests to an auth server. **If the JWT suddenly needs to be invalidated (e.g. the user's token was stolen) how could we implement this?**

## Appendix

### References

- Article: [JWT: JWS and JWE for not-so-dummies](https://medium.facilelogin.com/jwt-jws-and-jwe-for-not-so-dummies-b63310d201a3)

### Resources

- Utility: [JWT.io](http://jwt.io) - quickly decode and validate JWTs.

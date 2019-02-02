Your Solution Documentation
===========================

Even though I am new to React, thought it's worth to give it a spin, so the solution ui was done using React. I spend around 6 hours all together and lost bit of time in troubleshooting mysql connectivity across containers. Changed config a bit and it look sorted, however occasionally have to trigger docker more than once to get mysql up, so doesn't look stable.

At server side, I used mvc structure to organise express code; not perfect though respecting time and effort. For fetching jobs list, rather than using complex sql join query in express, I created a database view with the same query. Added view creation statement to docker mysql bootstrapping.

If I got more time, I will revisit the below items:


    infrastrcuture:
        spend more time understanding issues with docker container to container mysql access.

    server side:
        Active Record implementation rather than using vanilla sql in express code.
        Look provision to implement better error handling.
    
    ui:
        Less implementation as there are few classes that can advantage from inheritance.
        Better front end error handling.
        Implement no records view for accepted/new jobs.
        From what I have read reg. react, would also consider a stateful library such as Redux.
        Responsiveness on various devices.

### Instructions:
    
    run npm at both server and ui code base as I have introduced couple of new libraries.
    
    run docker. 
        
        - ui listens to port 3000
        - server listens to 8080
        - mysql at 3307 for external access.

Thanks for the challenge, was fun doing it especially with react and end up as my first react app :-)

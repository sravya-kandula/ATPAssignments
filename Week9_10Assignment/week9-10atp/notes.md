multer -- to extract the binary data from the request
upload oto temp folder to backend
memory storage ----- RAM

dont store i n a seperate folder ... issue 
frontend - cloud application -- **cloudinary + react**
add features like image size type and also a preview after uploading 

only png files willbe enabled  **accept** -- attribute  is used to disable remaining  - at starting itself

add all user properties to form data object 
add image to formDataObject .append()


***cleanup(remove preview content from browser memory)***


installation
**npm i multer cloudinary


**another folder called config
cloudinary.js
multer.js
cloudinaryUpload.js


CLOUD_NAME=dgenvqlpb
API_SECRET=f7GtpAASD4v1FjpcideBrmtFK0g
API_KEY=514231912471741



======================================



BEFORE PROMISES
**call back functions were used**
def -  function passing through an argument to another function
when it requires 
syntax is clumsy
internal callbacks 
callback hell is the problem 
testing will be causing problem difficult to read due to huge no of more internal callbacks



**TO CONSUME PROMISE** 
.THEN
AWAIT

as we use async and await we need to convert the call back to promises
========================================================================================================================
upload_stream -- predefined from cloudinary.............

stream is best to upload the image because it can divide into multiple chunks
========================================================================================================================

next() -- pases to the next middleware
next(err) - passes to the err handling middleware

========================================================================================================================
in cloudinary api key it must store the image

========================================================================================================================

PROTECTING CLIENT SIDE ROUTE


1.create a protectedroute
2.destructure the required properties and write the conditions to be applied for that
3.wrap the component which needs the route ..........


****navigate to login if user is not logged in and after log in it navigate to 404 not authorized if user logged in and try to grab the author profile....***
Navigate() component = just to direct to the react component
useNavigate() hook = programatic reaction when an incident occurs it redirects to that.
==========================================================================================================================

after refreshing the present page must be remain same
current user page after log in must be same if he even refreshes so ---
how it does means 
useeffect executes when initially rerendering 
after that depending on the code we write 

=========================================================================================================================
as if we write the function in the rootlayout is not efficient because in the global state it becomes false no use to store in rootlayout so what we do is 

we write a function in the authstore so that it stores globally and we call it in the app parent component..
so that every child can access it and works referesh for everry compone t

import it in the rootlayout useeffect(()=>{checkAuth();},[]);
===========================================================================================================================

in authservice in generate token we nnedd to add image and firstname to display in the  userprofile 

and if we refresh the userarticles it refreshes to the yser profile or it can be in the same page if we use useLocation()

===========================================================================================================================


after refreshing the articles in the author profile it is displaying object id mismatched i.e
the original prop given by us is user_id but when it is initially loading it is displaying the direct id of database as _id and after refresh  it changed to object_id thats the problem we need to fix it and rewrite the code.........
===========================================================================================================================

**useRouteError*** -- it is a hook to display the exact error in the error boundary


in the components we need to add a Folder called ErrorBoundary.jsx
and in that this hook is added to display   ==============  [data ,status, statustext]  ==========================   

======================================
add comments

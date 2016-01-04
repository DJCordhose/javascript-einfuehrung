
// JavaScript Error ~ RuntimeException in Java
try {
    //throw "Error";
    //throw true;
    // or
    throw new Error("Error");
} catch (e) {
    console.log("Caught: " + e)
} finally {
    console.log("Always")
}
    
console.log("Script loaded successfully ");
Java.perform(function x() { //Silently fails without the sleep from the python code
    console.log("Inside java perform function");

    var apiHost = Java.use("jil");
    apiHost.approvedUriHost.implementation = function () {
        console.log("IN THE FUNC FOR APPROVAL")
        return this.approvedUriHost();
    };

    var dgw = Java.use("dgw");
    dgw.jR.implementation = function (x) {
        console.log("IN DGW with str value of " + x)
        console.log(x)
        console.log(this.jR(x))
        return this.jR(x)
        // x = "https://robertprast.github.io\\@wps.com"
        // console.log(x)
        // console.log(this.jR(x))
        // x = "https://robertprast.github.io%5C%5C@wps.com"
        // console.log(x)
        // console.log(this.jR(x))
        // x = "sdfsdfwps.com"
        // console.log(this.jR(x))
    };


    var gzg = Java.use("gzg");
    gzg.J.implementation = function (x, y) {
        console.log("IN gzg with int value of " + x + " and str val of " + y)
        // console.log(JSON.stringify(this.J(x,y)))
    };

    console.log("HEY WHATS UP!")
    // var OnlineParamProtoBuf = Java.use("afbs$a");
    // console.log(OnlineParamProtoBuf);
    // OnlineParamProtoBuf.a.overload("T t, byte[] bArr").implementation = function (y,x) {
    //     console.log("IN OnlineParamtools with int value of "+x)
    // };


    var WebView = Java.use("android.webkit.WebView");
    WebView.loadUrl.overload("java.lang.String").implementation = function (s) {
        console.log("URL: " + s.toString())
        this.loadUrl.overload("java.lang.String").call(this, s);
    };

    // ['java.lang.StringBuilder', 'java.lang.StringBuffer'].forEach(function (clazz, i) {
    //     console.log('[?] ' + i + ' = ' + clazz);
    //     var func = 'toString';
    //     Java.use(clazz)[func].implementation = function () {
    //         var ret = this[func]();
    //         if (ret.indexOf('') != -1) {
    //             // print stacktrace if return value contains specific string
    //             Java.perform(function () {
    //                 var jAndroidLog = Java.use("android.util.Log"), jException = Java.use("java.lang.Exception");
    //                 console.log(jAndroidLog.getStackTraceString(jException.$new()));
    //             });
    //         }
    //         console.log('[' + i + '] ' + ret);
    //         return ret;
    //     }
    // });

});


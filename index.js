// const fs = require("fs");
// fs.writeFile(
//     "sample.txt",
//     "Hello World. Welcome to Node.js File System module.",
//     (err) => {
//         if (err) throw err;
//         console.log("File created!");
//     }
// );
// fs.readFile("sample.txt", (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });
// fs.appendFile("sample.txt","this is and appended file",(err) => {
//     if (err) throw err;
//     console.log("File updated");
// });
// fs.rename("sample.txt", "test.txt", (err) => {
//     if (err) throw err;
//     console.log("File name updated");
// });
// fs.unlink("test.txt", (err) => {
//     if (err) throw err;
//     console.log("File test.txt deleted successfully!");
// });


// const readline = require("readline");
// const linedetail = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// linedetail.question(`please provide your name - `, (name) => {
//     {
//         console.log(`hi ${name}!`);
//         linedetail.close();
//     }
// })


// const args = require("minimist")(process.argv.slice(2));
// console.log(args);

// let arg = minimist(process.argv.slice(2), {
//     alias: {
//         n: "name",
//         a: "age",
//     },
// });
// const http = require("http");
// const fs = require("fs");
// // fs.readFile("home.html", (err, home) => {
// //     console.log(home.toString());
// // });
// // fs.readFile("home.html", (err, home) => {
// //     if (err) {
// //         throw err;
// //     }
// //     http.createServer((request, response) => {
// //         response.writeHeader(200, { "Content-Type": "text/html" });
// //         response.write(home);
// //         response.end();
// //     }).listen(3000);
// // });

// // 




// // const http = require("http");
// // const fs = require("fs");
// // const args = require("minimist")(process.argv.slice(2));


// // let homeContent = "";
// // let projectContent = "";
// // let registration = "";
// // // let args = minimist(process.argv.slice(2), {
// // //     alias: {
// // //         port: "name",
// // //     },
// // // });
// // // var port = process.argv.slice(2);
// // // port = parseInt(String(port).slice(7));
// // // console.log(port);
// // var port = process.argv.slice(2)
// // port = parseInt(String(port).slice(7))
// // console.log(port);

// // // console.log(args.port); 
// // fs.readFile("home.html", (err, home) => {
// //     if (err) {
// //         throw err;
// //     }
// //     homeContent = home;
// // });

// // fs.readFile("project.html", (err, project) => {
// //     if (err) {
// //         throw err;
// //     }
// //     projectContent = project;
// // });


// // fs.readFile("registration.html", (err, reg) => {
// //     if (err) {
// //         throw err;
// //     }
// //     registration = reg;
// // });


// // http
// //     .createServer((request, response) => {
// //         let url = request.url;
// //         response.writeHeader(200, { "Content-Type": "text/html" });
// //         switch (url) {
// //             case "/Project.html":
// //                 response.write(projectContent);
// //                 response.end();
// //                 break;
// //             case "/registration.html":
// //                 response.write(registration);
// //                 response.end();
// //                 break;
// //             default:
// //                 response.write(homeContent);
// //                 response.end();
// //                 break;
// //         }
// //     })
// //     .listen(3000);



// var port = process.argv.slice(2)
// port = parseInt(String(port).slice(7))
// console.log(port);


// // JavaScript source code
// // const http = require("http");
// // const fs = require("fs");
// // var port = process.argv.slice(2)
// // port = parseInt(String(port).slice(7))
// // console.log(port);
// //fs.readFile("home.html", (err, home) => {
// //    console.log(home.toString());
// //});
// //fs.readFile("registration.html", (err, registration) => {
// //    console.log(registration.toString());
// //});
// //fs.readFile("home.html", (err, home) => {
// //    if (err) {
// //        throw err;
// //    }
// //    http
// //        .createServer((request, response) => {
// //            response.writeHeader(200, { "Content-Type": "text/html" });
// //            response.write(home);
// //            response.end();
// //        })
// //        .listen(3000);
// //});
// let homeContent = "";
// let projectContent = "";
// let registrationContent = "";

// fs.readFile("home.html", (err, home) => {
//     if (err) {
//         throw err;
//     }
//     homeContent = home;
// });

// fs.readFile("project.html", (err, project) => {
//     if (err) {
//         throw err;
//     }
//     projectContent = project;
// });
// fs.readFile("registration.html", (err, reg) => {
//     if (err) {
//         throw err;
//     }
//     registrationContent = reg;
// });
// //fs.readFile("home.html", (err, home) => {
// //    console.log(home.toString());
// //});
// //fs.readFile("registration.html", (err, registration) => {
// //    console.log(registration.toString());
// //});
// //fs.readFile("home.html", (err, home) => {
// //    if (err) {
// //        throw err;


// http
//     .createServer((request, response) => {
//         let url = request.url;
//         response.writeHeader(200, { "Content-Type": "text/html" });
//         switch (url) {
//             case "/project":
//                 response.write(projectContent);
//                 response.end();
//                 break;
//             case "/registration":
//                 response.write(registrationContent);
//                 response.end();
//                 break;
//             default:
//                 response.write(homeContent);
//                 response.end();
//                 break;
//         }
//     })
//     .listen(port);






// JavaScript source code
const http = require("http");
const fs = require("fs");
var port = process.argv.slice(2)
port = parseInt(String(port).slice(7))
console.log(port);
let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
    if (err) {
        throw err;
    }
    homeContent = home;
});

fs.readFile("project.html", (err, project) => {
    if (err) {
        throw err;
    }
    projectContent = project;
});
fs.readFile("registration.html", (err, registration) => {
    if (err) {
        throw err;
    }
    registrationContent = registration;
});
http
    .createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { "Content-Type": "text/html" });
        switch (url) {
            case "/project":
                response.write(projectContent);
                response.end();
                break;
            case "/registration":
                response.write(registrationContent);
                response.end();
                break;
            default:
                response.write(homeContent);
                response.end();
                break;
        }
    })
    .listen(port);

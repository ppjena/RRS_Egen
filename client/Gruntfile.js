module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),

        cssmin:{
            css:{
                files:{
                    'dist/min/app.style.min.css':['src/css/lib/bootstrap.min.css','src/css/common.css','src/css/login.css']
                }
            }
        },

        autoprefixer:{
            options:{
                browsers:['last 3 versions','ie 8','ie 9']
            },
            files:{
                src:'dist/min/app.style.min.css',
                dest:'dist/min/app.style.min.css'
            }

        },

        uglify:{
            js:{
                files:{
                    'dist/min/app.script.min.js':['src/js/lib/*.js','src/js/*.js','src/js/controller/*.js']
                }
            }
        }
    });

            grunt.loadNpmTasks['grunt-contrib-cssmin'];
            grunt.loadNpmTasks['grunt-contrib-uglify'];
            grunt.loadNpmTasks['grunt-autoprefixer'];

    grunt.registerTask('default',['cssmin','autoprefixer','uglify']);

};
<<<<<<< HEAD
/*jslint
    node: true,
    browser: true,
    unparam: true
*/

module.exports = function (grunt) {
    "use strict";
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            }
        },
        jslint: {
            src: ['gruntfile.js', 'js/*.js']
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/styles.css": "less/styles.less"
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/results/results.txt',
                    quiet: false,
                    clearRequireCache: false
                },
                src: ['test/**/*.js']
            }
        },
        markdown: {
            all: {
                expand: true,
                src: 'README.md',
                dest: 'doc/',
                ext: '.html'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'lib/back-end.min.js': ['js/back-end.js'],
                    'lib/front-end.min.js': ['js/front-end.js']
                }
            }
        },
        watch: {
            javascript: {
                files: ['<%= jslint.src %>'],
                tasks: ['jslint', 'mochaTest']
            },
            styles: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            mochaTest: {
                files: ['<%= mochaTest.test.src %>'],
                tasks: ['mochaTest']
            },
            markdown: {
                files: ['<%= markdown.all.src %>'],
                tasks: ['markdown']
            },
            uglify: {
                files: ['js/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('test', ['jslint', 'mochaTest']);
    grunt.registerTask('default', ['jslint', 'less', 'mochaTest', 'markdown', 'uglify']);
=======
<<<<<<< HEAD
/*jslint
    node: true,
    browser: true,
    unparam: true
*/

module.exports = function (grunt) {
    "use strict";
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            }
        },
        jslint: {
            src: ['gruntfile.js', 'js/*.js']
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/styles.css": "less/styles.less"
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/results/results.txt',
                    quiet: false,
                    clearRequireCache: false
                },
                src: ['test/**/*.js']
            }
        },
        markdown: {
            all: {
                expand: true,
                src: 'README.md',
                dest: 'doc/',
                ext: '.html'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'lib/back-end.min.js': ['js/back-end.js'],
                    'lib/front-end.min.js': ['js/front-end.js']
                }
            }
        },
        watch: {
            javascript: {
                files: ['<%= jslint.src %>'],
                tasks: ['jslint', 'mochaTest']
            },
            styles: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            mochaTest: {
                files: ['<%= mochaTest.test.src %>'],
                tasks: ['mochaTest']
            },
            markdown: {
                files: ['<%= markdown.all.src %>'],
                tasks: ['markdown']
            },
            uglify: {
                files: ['js/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('test', ['jslint', 'mochaTest']);
    grunt.registerTask('default', ['jslint', 'less', 'mochaTest', 'markdown', 'uglify']);
=======
/*jslint
    node: true,
    browser: true,
    unparam: true
*/

module.exports = function (grunt) {
    "use strict";
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            }
        },
        jslint: {
            src: ['gruntfile.js', 'js/*.js']
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/styles.css": "less/styles.less"
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'test/results/results.txt',
                    quiet: false,
                    clearRequireCache: false
                },
                src: ['test/**/*.js']
            }
        },
        markdown: {
            all: {
                expand: true,
                src: 'README.md',
                dest: 'doc/',
                ext: '.html'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'lib/back-end.min.js': ['js/back-end.js'],
                    'lib/front-end.min.js': ['js/front-end.js']
                }
            }
        },
        watch: {
            javascript: {
                files: ['<%= jslint.src %>'],
                tasks: ['jslint', 'mochaTest']
            },
            styles: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            mochaTest: {
                files: ['<%= mochaTest.test.src %>'],
                tasks: ['mochaTest']
            },
            markdown: {
                files: ['<%= markdown.all.src %>'],
                tasks: ['markdown']
            },
            uglify: {
                files: ['js/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('test', ['jslint', 'mochaTest']);
    grunt.registerTask('default', ['jslint', 'less', 'mochaTest', 'markdown', 'uglify']);
>>>>>>> 2a33968c69530b7b13e4b43ac5fde7501a827411
>>>>>>> 7b5ccf4274485fc2e90a9d2afcf46a3e15920030
};
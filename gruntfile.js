module.exports = function(grunt) {

    grunt.initConfig({
        release: {
            options: {
                npm: false //default: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-release');

    grunt.registerTask('default', []);

};

// 包装函数
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	// 任务配置
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {

		},
		concat: {

		},
		connect: {
			options: {
				port: 9000,
				hostname: 'localhost',
				livereload: 35729,
			},
			
			livereload: {
				options: {
					open: true,
					base: ['.']
				}
			}
		
		},

		watch: {
			livereload: {
				options: {
					livereload: '<%=connect.options.livereload %>'
				},
				files: [
					'*.html',
					'css/**/*.css',
					'js/**/*.js',
					'page/*.html'
				]
			}
		
		}
  });

	grunt.registerTask('server', ['connect:livereload', 'watch'])

	// 自定义任务
	grunt.registerTask('default', ['uglify']);

};

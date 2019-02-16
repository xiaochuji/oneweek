var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var clean = require("gulp-cleancss");
var ug = require("gulp-uglify");
var server = require("gulp-webserver");

//编译sass
gulp.task("sass",function(){
    return gulp.src("./src/scss/*.scss")
           .pipe(sass())
           .pipe(gulp.dest("./src/css"))
})

//压缩sass
gulp.task("concat",function(){
    return gulp.src("./src/css/*.css")
           .pipe(concat("all.css"))
           .pipe(gulp.dest("./src/css"))
})

//起服务
gulp.task("server",function(){
    return gulp.src("./src")
           .pipe(server({
               open:true,
               livereload:true
           }))
})

//压缩js
gulp.task("minjs",function(){
    return gulp.src("./src/js/index.js")
           .pipe(ug())
           .pipe(gulp.dest("./src/libs"))
})

//监听
gulp.task("watch",function(){
    gulp.watch("./src/scss/*.scss",gulp.series("sass","concat"))
})

gulp.task("all",gulp.series("sass","concat","server","minjs","watch"))
//生成dist文件夹
gulp.task("html",function(){
    return gulp.src("./src/index.html")
           .pipe(gulp.dest("./dist/"))
})

gulp.task("bulid",function(){
    return gulp.src("./src/css/*.css")
           .pipe(gulp.dest("./dist/css"))
})

gulp.task("bulidjs",function(){
    return gulp.src("./src/libs/*.js")
           .pipe(gulp.dest("./dist/js"))
})

gulp.task("up",gulp.series("html","bulid","bulidjs"))
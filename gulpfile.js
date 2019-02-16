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


//压缩js

//监听
gulp.task("watch",function(){
    gulp.watch("./src/scss/*.scss",gulp.series("sass","concat"))
})

gulp.task("all",gulp.series("sass","concat","watch"))
//生成dist文件夹
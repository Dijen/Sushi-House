let project_folder = "dist";
//имя папки в которой будет выводится работа gulp(сбор проетка), папка с проектом
let sourse_folder = "#src";
// имя папки с исходниками

let path = {
        build: {
            html: project_folder + "/",
            css: project_folder + "/css/",
            js: project_folder + "/js/",
            img: project_folder + "/img/",
            fonts: project_folder + "/fonts/",
        },
        // пути вывода, gulp выгружает обработанные файлы

        src: {
            html: sourse_folder + "/",
            css: sourse_folder + "/sass/style.sass",
            js: sourse_folder + "/js/script.js",
            img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
            // **-слушфть все под папки, *.- конкретика файлов
            fonts: sourse_folder + "/fonts/*.ttf",
        },
        // пути вывода, gulp выгружает обработанные файлы
        watch: {
            html: sourse_folder + "/**/*.html",
            css: sourse_folder + "/sass/**/*.sass",
            js: sourse_folder + "/js/**/*.js",
            img: sourse_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
            // **-слушфть все под папки, *.- конкретика файлов
        },
        // пути вывода, gulp выгружает обработанные файлы
        // Объект clean который удаляет папку src при запускании gulp
    }
    //содержит объекты которые будут содержать различные пути к файлам и папкам
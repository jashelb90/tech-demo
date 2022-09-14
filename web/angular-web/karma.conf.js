// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

import karma_jasmine from 'karma-jasmine';

import karma_chrome_launcher from 'karma-chrome-launcher';

import karma_jasmine_html_reporter from 'karma-jasmine-html-reporter';

import karma_coverage from 'karma-coverage';

import generated from '@angular-devkit/build-angular/plugins/karma';

import { join } from 'path';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [karma_jasmine, karma_chrome_launcher, karma_jasmine_html_reporter, karma_coverage, generated],
        client: {
            jasmine: {
                // you can add configuration options for Jasmine here
                // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
                // for example, you can disable the random execution with `random: false`
                // or set a specific seed with `seed: 4321`
            },
            clearContext: false, // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true, // removes the duplicated traces
        },
        coverageReporter: {
            dir: join(__dirname, './coverage/angular-web'),
            subdir: '.',
            reporters: [{ type: 'html' }, { type: 'text-summary' }],
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        restartOnFileChange: true,
    });
};

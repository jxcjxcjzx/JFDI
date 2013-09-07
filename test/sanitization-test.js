/*
 *           ___         ___           ___
 *          /\  \       /\  \         /\  \          ___
 *          \:\  \     /::\  \       /::\  \        /\  \
 *      ___ /::\__\   /:/\:\  \     /:/\:\  \       \:\  \
 *     /\  /:/\/__/  /::\~\:\  \   /:/  \:\__\      /::\__\
 *     \:\/:/  /    /:/\:\ \:\__\ /:/__/ \:|__|  __/:/\/__/
 *      \::/  /     \/__\:\ \/__/ \:\  \ /:/  / /\/:/  /
 *       \/__/           \:\__\    \:\  /:/  /  \::/__/
 *                        \/__/     \:\/:/  /    \:\__\
 *                                   \::/__/      \/__/
 */

'use strict';

/*jshint maxlen:180*/

var vows = require('vows');
var assert = require('assert');
var sinon = require('sinon');
var prompt = require('prompt');
var fs = require('fs');
var program = require('commander');

var JFDI = require('../lib/JFDI');

function resetState() {
    delete program.add;
    delete program.find;
    delete program.defer;
    delete program.expedite;
    delete program.prioritize;
    delete program['do'];
}

var oldArguments;

function setup(postSetup) {
    oldArguments = process.argv;

    resetState();

    // To prevent overwriting data/.root.
    sinon.stub(fs, 'writeFileSync');

    // To prevent "resource not found " errors.
    sinon.stub(fs, 'readFileSync', function(path) {
        return path;
    });

    // To prevent corrupting real data.
    JFDI.setDataRoot('');

    if (postSetup) {
        postSetup();
    }
}

function teardown(preTeardown) {
    if (preTeardown) {
        preTeardown();
    }

    fs.writeFileSync.restore();
    fs.readFileSync.restore();

    process.argv = oldArguments;

    resetState();
}

/*----------------------------------------------------------------------------*/

vows.describe('jfdi.sanitize').addBatch({
    'when ./data/.root is empty': {
        topic: function() {
            var result, expectation;

            setup(function() {

                // So that we won't update the real .root file.
                sinon.stub(prompt, 'start');
                sinon.stub(prompt, 'get');
            });

            result = JFDI.sanitize();

            expectation = !result && prompt.start.calledOnce;

            teardown(function() {
                prompt.start.restore();
                prompt.get.restore();
            });

            return expectation;
        },
        'user should be prompted': function(expectation) {
            assert.equal(expectation, true);
        }
    }
}).export(module);

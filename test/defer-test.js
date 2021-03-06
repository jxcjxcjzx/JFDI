'use strict';

/*           ___         ___           ___
 *          /\  \       /\  \         /\  \          ___
 *          \:\  \     /::\  \       /::\  \        /\  \
 *      ___ /::\__\   /:/\:\  \     /:/\:\  \       \:\  \
 *     /\  /:/\/__/  /::\~\:\  \   /:/  \:\__\      /::\__\
 *     \:\/:/  /    /:/\:\ \:\__\ /:/__/ \:|__|  __/:/\/__/
 *      \::/  /     \/__\:\ \/__/ \:\  \ /:/  / /\/:/  /
 *       \/__/           \:\__\    \:\  /:/  /  \::/__/
 *                        \/__/     \:\/:/  /    \:\__\
 *                                   \::/__/      \/__/
 *
 *              https:/github.com/v0lkan/JFDI
 *
 * This program is distributed under the terms of the MIT license.
 * Please see the LICENSE.md file for details.
 */

/*jshint maxlen:180*/

var vows = require('vows'),
    assert = require('assert'),
    sinon = require('sinon'),
    fs = require('fs'),
    program = require('commander');

var JFDI = require('../lib/JFDI'),
    runtime = require('../lib/runtime'),
    command = require('../lib/command'),
    helper = require('./helper');

/*----------------------------------------------------------------------------*/

vows.describe('jfdi -d 0').addBatch({
    'Parsing>>>': {
        'when "jfdi -d 0" is called': {
            topic: function() {
                var args, expectation;

                helper.setup();

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '-d' &&
                    args[3] === '0' &&
                    args[4] === 'today' &&
                    args.length === 5;

                helper.teardown();

                return expectation;
            },
            'it should translate to "jfdi -d 0 today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi -d 0" is called': {
            topic: function() {
                var expectation;

                helper.setup(function() {sinon.stub(command.privates, 'handleDefer');});

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleDefer.calledOnce;

                helper.teardown(function() {command.privates.handleDefer.restore();});

                return expectation;
            },
            'it should complete the item': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi -d 0 today').addBatch({
    'Parsing>>>': {
        'when "jfdi -d 0 today" is called': {
            topic: function() {
                var args, expectation;

                helper.setup();

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '-d' &&
                    args[3] === '0' &&
                    args[4] === 'today' &&
                    args.length === 5;

                helper.teardown();

                return expectation;
            },
            'it should translate to "jfdi -d 0 today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi -d 0 today" is called': {
            topic: function() {
                var expectation;

                helper.setup(function() {sinon.stub(command.privates, 'handleDefer');});

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleDefer.calledOnce;

                helper.teardown(function() {command.privates.handleDefer.restore();});

                return expectation;
            },
            'it should complete the item': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi -d 0 tomorrow').addBatch({
    'Parsing>>>': {
        'when "jfdi -d 0 tomorrow" is called': {
            topic: function() {
                var args, expectation;

                helper.setup();

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '-d' &&
                    args[3] === '0' &&
                    args[4] === 'tomorrow' &&
                    args.length === 5;

                helper.teardown();

                return expectation;
            },
            'it should translate to "jfdi -d 0 tomorrow"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi -d 0 tomorrow" is called': {
            topic: function() {
                var expectation;

                helper.setup(function() {sinon.stub(command.privates, 'handleDeferIncorrectRealm');});

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleDeferIncorrectRealm.calledOnce;

                helper.teardown(function() {command.privates.handleDeferIncorrectRealm.restore();});

                return expectation;
            },
            'it should warn the user': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi --defer 0 tomorrow').addBatch({
    'Parsing>>>': {
        'when "jfdi --defer 0 tomorrow" is called': {
            topic: function() {
                var args, expectation;

                helper.setup();

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--defer' &&
                    args[3] === '0' &&
                    args[4] === 'tomorrow' &&
                    args.length === 5;

                helper.teardown();

                return expectation;
            },
            'it should translate to "jfdi --defer 0 tomorrow"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi --defer 0 tomorrow" is called': {
            topic: function() {
                var expectation;

                helper.setup(function() {sinon.stub(command.privates, 'handleDeferIncorrectRealm');});

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleDeferIncorrectRealm.calledOnce;

                helper.teardown(function() {command.privates.handleDeferIncorrectRealm.restore();});

                return expectation;
            },
            'it should warn the user': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi --defer 0').addBatch({
    'Parsing>>>': {
        'when "jfdi --defer 0" is called': {
            topic: function() {
                var args, expectation;

                helper.setup();

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--defer' &&
                    args[3] === '0' &&
                    args[4] === 'today' &&
                    args.length === 5;

                helper.teardown();

                return expectation;
            },
            'it should translate to "jfdi --defer 0 today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi --defer 0" is called': {
            topic: function() {
                var expectation;

                helper.setup(function() {sinon.stub(command.privates, 'handleDefer');});

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleDefer.calledOnce;

                helper.teardown(function() {command.privates.handleDefer.restore();});

                return expectation;
            },
            'it should complete the item': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi --defer 0 today').addBatch({
    'Parsing>>>': {
        'when "jfdi --defer 0 today" is called': {
            topic: function() {
                var args, expectation;

                helper.setup();

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--defer' &&
                    args[3] === '0' &&
                    args[4] === 'today' &&
                    args.length === 5;

                helper.teardown();

                return expectation;
            },
            'it should translate to "jfdi --defer 0 today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi --defer 0 today" is called': {
            topic: function() {
                var expectation;

                helper.setup(function() {sinon.stub(command.privates, 'handleDefer');});

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleDefer.calledOnce;

                helper.teardown(function() {command.privates.handleDefer.restore();});

                return expectation;
            },
            'it should complete the item': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi --defer 0 tomorrow').addBatch({
    'Parsing>>>': {
        'when "jfdi --defer 0 tomorrow" is called': {
            topic: function() {
                var args, expectation;

                helper.setup();

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--defer' &&
                    args[3] === '0' &&
                    args[4] === 'tomorrow' &&
                    args.length === 5;

                helper.teardown();

                return expectation;
            },
            'it should translate to "jfdi --defer 0 tomorrow"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi --defer 0 tomorrow" is called': {
            topic: function() {
                var expectation;

                helper.setup(function() {sinon.stub(command.privates, 'handleDeferIncorrectRealm');});

                // Create the command.
                process.argv = helper.getArgv(this);

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleDeferIncorrectRealm.calledOnce;

                helper.teardown(function() {command.privates.handleDeferIncorrectRealm.restore();});

                return expectation;
            },
            'it should warn the user': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

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
var fs = require('fs');
var program = require('commander');

var JFDI = require('../lib/JFDI');
var runtime = require('../lib/runtime');
var command = require('../lib/command');


// To prevent overwriting data/.root.
sinon.stub(fs, 'writeFileSync');

// To prevent "resource not found " errors.
sinon.stub(fs, 'readFileSync', function(path) {
    return path;
});

// To prevent corrupting real data.
JFDI.setDataRoot('');

function resetProgramState() {
    delete program.add;
    delete program.find;
    delete program.defer;
    delete program.expedite;
    delete program.prioritize;
    delete program['do'];
}

/*----------------------------------------------------------------------------*/

vows.describe('jfdi foo').addBatch({
    'Parsing>>>': {
        'when "jfdi foo" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', 'foo'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add foo today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi foo" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', 'foo'];

                runtime.initialize();

                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi foo bar').addBatch({
    'Parsing>>>': {
        'when "jfdi foo bar" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', 'foo', 'bar'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo bar' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo bar\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi foo bar" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', 'foo', 'bar'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi foo bar baz').addBatch({
    'Parsing>>>': {
        'when "jfdi foo bar baz" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', 'foo', 'bar', 'baz'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo bar baz' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo bar baz\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi foo bar" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', 'foo', 'bar', 'baz'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi -a foo').addBatch({
    'Parsing>>>': {
        'when "jfdi -a foo" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '-a' &&
                    args[3] === 'foo' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi -a \'foo\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi -a foo" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi --add foo').addBatch({
    'Parsing>>>': {
        'when "jfdi --add foo" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi -add foo" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi foo today').addBatch({
    'Parsing>>>': {
        'when "jfdi foo today" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', 'foo', 'today'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi foo today" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', 'foo', 'today'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi foo bar today').addBatch({
    'Parsing>>>': {
        'when "jfdi foo bar today" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', 'foo', 'bar', 'today'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo bar' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo bar\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi foo today" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', 'foo', 'bar', 'today'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi foo bar baz today').addBatch({
    'Parsing>>>': {
        'when "jfdi foo bar baz today" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', 'foo', 'bar', 'baz', 'today'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo bar baz' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo bar baz\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi foo today" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', 'foo', 'bar', 'baz', 'today'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi -a foo today').addBatch({
    'Parsing>>>': {
        'when "jfdi -a foo today" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo', 'today'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '-a' &&
                    args[3] === 'foo' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi -a \'foo\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi -a foo today" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo', 'today'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi -a foo bar today').addBatch({
    'Parsing>>>': {
        'when "jfdi -a foo bar today" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo', 'bar', 'today'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '-a' &&
                    args[3] === 'foo bar' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi -a \'foo bar\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi -a foo bar today" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo', 'bar', 'today'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi -a foo bar baz today').addBatch({
    'Parsing>>>': {
        'when "jfdi -a foo bar baz today" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo', 'bar', 'baz', 'today'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '-a' &&
                    args[3] === 'foo bar baz' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi -a \'foo bar baz\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi -a foo bar baz today" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo', 'bar', 'baz', 'today'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi --add foo today').addBatch({
    'Parsing>>>': {
        'when "jfdi --add foo today" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo', 'today'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi --add foo today" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo', 'today'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi --add foo bar today').addBatch({
    'Parsing>>>': {
        'when "jfdi --add foo bar today" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo', 'bar', 'today'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo bar' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo bar\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi --add foo bar today" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo', 'bar', 'today'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi --add foo bar baz today').addBatch({
    'Parsing>>>': {
        'when "jfdi --add foo bar baz today" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo', 'bar', 'baz','today'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo bar baz' &&
                    args[4] === 'today' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo bar baz\' today"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi --add foo bar baz today" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command, 'handleToday');

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo', 'bar', 'baz', 'today'];

                runtime.initialize();
                runtime.execute();

                expectation = command.handleToday.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.handleToday.restore();
                resetProgramState();

                return expectation;
            },
            'it should add a new task to today': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi foo tomorrow').addBatch({
    'Parsing>>>': {
        'when "jfdi foo tomorrow" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', 'foo', 'tomorrow'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo' &&
                    args[4] === 'tomorrow' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo\' tomorrow"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi foo tomorrow" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                // TODO: rename handleAdditionWrongRealm
                sinon.stub(command.privates, 'handleAdditionIncorrectRealm');

                // Create the command.
                process.argv = ['node', '.', 'foo', 'tomorrow'];

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleAdditionIncorrectRealm.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.privates.handleAdditionIncorrectRealm.restore();
                resetProgramState();

                return expectation;
            },
            'it should warn user about the incorrect behavior': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi -a foo tomorrow').addBatch({
    'Parsing>>>': {
        'when "jfdi -a foo tomorrow" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo', 'tomorrow'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '-a' &&
                    args[3] === 'foo' &&
                    args[4] === 'tomorrow' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi -a \'foo\' tomorrow"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi -a foo tomorrow" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command.privates, 'handleAdditionIncorrectRealm');

                // Create the command.
                process.argv = ['node', '.', '-a', 'foo', 'tomorrow'];

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleAdditionIncorrectRealm.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.privates.handleAdditionIncorrectRealm.restore();
                resetProgramState();

                return expectation;
            },
            'it should warn user about the incorrect behavior': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

vows.describe('jfdi --add foo tomorrow').addBatch({
    'Parsing>>>': {
        'when "jfdi --add foo tomorrow" is called': {
            topic: function() {
                var oldArgs, args, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo', 'tomorrow'];

                runtime.initialize();

                args = process.argv;

                expectation = args[2] === '--add' &&
                    args[3] === 'foo' &&
                    args[4] === 'tomorrow' &&
                    args.length === 5;

                // Teardown.
                process.argv = oldArgs;
                resetProgramState();

                return expectation;
            },
            'it should translate to "jfdi --add \'foo\' tomorrow"': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    },
    'Execution>>>': {
        'when "jfdi --add foo tomorrow" is called': {
            topic: function() {
                var oldArgs, expectation;

                // Setup.
                resetProgramState();
                oldArgs = process.argv;
                sinon.stub(command.privates, 'handleAdditionIncorrectRealm');

                // Create the command.
                process.argv = ['node', '.', '--add', 'foo', 'tomorrow'];

                runtime.initialize();
                runtime.execute();

                expectation = command.privates.handleAdditionIncorrectRealm.calledOnce;

                // Teardown.
                process.argv = oldArgs;
                command.privates.handleAdditionIncorrectRealm.restore();
                resetProgramState();

                return expectation;
            },
            'it should warn user about the incorrect behavior': function(expectation) {
                assert.equal(expectation, true);
            }
        }
    }
}).export(module);

/*----------------------------------------------------------------------------*/

// Global teardown.
fs.writeFileSync.restore();
fs.readFileSync.restore();

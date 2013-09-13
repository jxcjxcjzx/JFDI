**Table of Contents** 

- [A Hacker's Way of Getting $#!% Done](#a-hackers-way-of-getting--done)
	- [Every Saga Has a Beginning](#every-saga-has-a-beginning)
	- [Why A Command Line Interface?](#why-a-command-line-interface)
		- [Why Right Now?](#why-right-now)
	- [Planning Is a Bummer](#planning-is-a-bummer)
	- [It is Plain Text Files, Baby!](#it-is-plain-text-files-baby!)
	- [When You Don't Have Access to `jfdi` CLI](#when-you-dont-have-access-to-jfdi-cli)
	- [Supported Platforms](#supported-platforms)
	- [Project Directory Structure](#project-directory-structure)
	- [Where Can I Get Help?](#where-can-i-get-help)
	- [Where is the Documentation?](#where-is-the-documentation)
	- [How Do I Setup **JFDI**?](#how-do-setup-jfdi)
		- [Setup for Linux / Mac](#setup-for-linux--mac)
		- [Setup for Windows](#setup-for-windows)
	- [Configuration](#configuration)
	- [Usage](#usage)
		- [Displaying Help](#displaying-help)
		- [Adding a Goal](#adding-a-goal)
		- [Listing Goals](#listing-goals)
		- [Deferring a Goal](#deferring-a-goal)
		- [Listing Deferred Goals](#listing-deferred-goals)
		- [Moving a Goal Back to Today's Queue](#moving-a-goal-back-to-today's-queue)
		- [Marking a Goal as Done](#marking-a-goal-as-done)
		- [Searching for Goals](#searching-for-goals)
	- [Things to Be Implemented](#things-to-be-implemented)
	- [Versioning](#versioning)
	- [How Do I Contribute?](#how-do-i-contribute)
	- [I Have A Question](#i-have-a-question)
	- [License](#license)
	- [Contact Information](#contact-information)

# A Hacker's Way of Getting $#!% Done

## Every Saga Has a Beginning

It all started with
[the **JFDI** Methodology](https://gist.github.com/v0lkan/2694911) and
[the **JFDI** Manifesto](https://gist.github.com/v0lkan/2731233).

> In a nutshell, **JFDI** is a *command line interface* to help you focus what goals
you can achieve **right now**.

## Why A Command Line Interface?

Because, we geeks live in the terminal. 

Using something that is already
open, and is most of the time in front of your eyes, will help you **overcome the
inertia** of launching a separate app to manage your goals &ndash; Here's why:

> Adding a **JFDI** goal is as simple as typing `jfdi save the world`. 
>
> You don't have to wait for&hellip;
> 
> * your shiny dandy GTD desktop app to launch&hellip; 
> * index its tasks&hellip; 
> * connect to the Internet&hellip; 
> * sync recent data&hellip; 
> * render a pretty UI&hellip;
>
> If after all that hassle, you will still need to click an "add task"
> button, just to add a simple gaol, than it's **too much work already**.
>

And when it is **too much work**, your subconscious will resist to
use that app. 

* That's why there are **hundreds** of **TODO** applications
out there; 
* And that's why the majority of people are not satisfied with
their "*task management software*".

> Now compare how you **JFDI**, instead:
>
>     Type your goal, hit _enter_ and bang!* it's there.
>
> \* *Yes, this does make a "bang!" sound effect in your mind ;).*

No process can be less interruptive, and faster than this!

The main aim of the application is to help you accomplish
**what need to be get done today**, with as little distraction as possible. 

So unlike other productivity <stike>pr\*n</stike> apps, in **JFDI**
you will not find dates, schedules, reminders, labels&hellip; to distract
yo away.

### Why Right Now?

Because it's f\*cking " **JFDI** " !

## Planning Is a Bummer

Admit it, most of the time you don't plan launching manless spaceships to the
moon. Your typical **runway** is something like&hellip;

* Fix bug id UNP9959: Unicorns and ponies should live together.
* Remember the milk.
* Save the world.

> Why torture your brain by setting *due dates* weeks from now
> to those simple tasks?! 
>
> **JFDI** what you can do **right now**, and *bump* the rest to
> **tomorrow**.

## It is Plain Text Files, Baby!

Do you know what is universally reachable, and modifiable, withouth needing
to download special software? 

> A plain text file. 

You can edit your text file on your Mac, on your PC, in your smart phone, 
in your tablet, on Mars, and on the mooon&hellip; 

Text files are damn fast to edit; **they do not distract you**.

What **JFDI** does is similar: 

> **JFDI** maintains *plain text files* in a **sync** directory of your choice. 

So if you set your **sync** directory to something like:

`/home/procrastinator/Dropbox/JFDI/`

(being /home/procrastinator/Dropbox/ your [Dropbox](http://dropbox.com/) folder)

**JFDI** will put three text files to that folder:

* **today.txt**,
* **tomorrow.txt**,
* and **done.txt**;

then you can edit these files wherever you want. 

And once you are done, they will be syncronized everywhere.

## When You Don't Have Access to `jfdi` CLI

Since those files are plain text files, you can use **any text editor** to modify them
even if you don't have access to `jfdi` command line interface.

> Since **JFDI** data files are plain text files, they are universally portable.
>
> For instance you can use an editor like [textastic](http://www.textasticapp.com/) 
> to edit your goal list on your smart phone or tablet), and then when you are
> back in front of your computer, you can use `jfdi` to modify 
> those files from where you left.

**JFDI** gives you the liberty to modify your files however you like.

It only has a single requirement:

    Keep each goal in a separate line.

It will play nicely, as long as you remmember to **keep each goal in its own line**.

And as long as you follow this simple rule, you can edit your text files in
whichever text editor you like, and when you run `jfdi` again, it will catch up and parse
the files properly.

## Supported Platforms

**JFDI** does not have any platform-specific dependencies. 

You should be able to run it on **any platform that supports Node.JS**. 

It should work properly in all major **Windows**, **Mac OSX**, and **Linux Platforms**.

If you face any particular issue with your platform
[file an issue](https://github.com/v0lkan/JFDI/issues/new).

## Project Directory Structure

The directory structure of the project is as follows:

* **test**: Unit tests.
* **lib**: Helper modules.
* **data**: Configuration folder (*do not touch*).
* *index.js*: The entry point of the program.
* *README.md*: This file you are looking at.
* *CHANGELOG.md*: Things done so far.
* *LICENSE.md*: Boring copyright stuff.
* *package.json*: npm package information.

## Where Can I Get Help?

Here a the places you can get help:

* If you are experiencing a problem, or if you have found a bug, or if you want
some cool sh\*t to be implemented
[you can file an issue](https://github.com/v0lkan/JFDI/issues/new).
* If you want to figure out how a specific command works, this README will be helpful,
and you can always [send an e-mail to **volkan@o2js.com**](mailto:volkan@o2js.com).

## Where is the Documentation?

Currently the only documentation is this **README**.

> You can also get command line help if you type `jfdi -h` or
`jfdi --help` in the console.

In addition to this **README** file, you can also read
[this o2js.com blog post](http://o2js.com/jfdi-a-hackers-way-to-get-stuff-done)
for usage examples, and installation details.

...

>If you write rewiews in your blog,
[send an e-mail to **volkan@o2js.com**](mailto:volkan@o2js.com) and it will be
added to this **README** ASAP.

## How Do I Setup **JFDI**?

### Setup for Linux / Mac

Setting up your **JFDI** environment is easy.

You should have [Node.JS](http://nodejs.org/) installed, first.

Once you have **Node.JS** installed, just run:

    [root@john.doe:~]# sudo npm install -g jfdi

and you will have **JFDI** installed globally.

### Setup for Windows

It is similar to Linux setup. After having installed **Node.JS**, just run.

    [root@john.doe:~]# npm install -g jfdi

and you are done.

## Configuration

> **Tip**:
>
> For Linux users setting up an alias like `alias j="sudo jfdi";`
> may save you a few keystrokes.

> **Tip**:
>
> You might need root privileges to use **JFDI**.
> 
> If the command examples given below do not work for you, replace
> `jfdi` with `sudo jfdi`, and try them again.
>
> If they still fail, [file a bug report](https://github.com/v0lkan/JFDI/issues/new).

To configure your **JFDI**, just type `jfdi` to the terminal.

    [root@john.doe:~]# jfdi

And you will get a prompt similar to this:

    ### Set Your JFDI for the First Time ###

        It looks like this is the first time you are using JFDI.
        Dont't worry, it's easy.

        The only thing you need to configure is a folder to
        store your JFDI data.

        Where do you want to store your JFDI data?
        Enter the full path ( like: /home/ninja/Dropbox/JFDI/ ).

    prompt: path:

Just type in the **full path** of a valid folder on your system.

    prompt: path:  /home/procrastinator/Dropbox/JFDI/

and then press enter. You will get this notification upon success:

    ### Yay! ####

        Ready to go! You can use JFDI now.

        Visit

        https://github.com/v0lkan/JFDI/blob/master/README.md

        for usage examples.

You can further verify everything is set up by checking your **JFDI** data
directory:

    [root@john.doe:~]# ls /root/Dropbox/JFDIExample/ -al
    total 8
    drwxr-xr-x  2 root root 4096 Sep 10 17:22 .
    drwx------ 11 root root 4096 Sep 10 13:50 ..
    -rw-r--r--  1 root root    0 Sep 10 17:22 done.txt
    -rw-r--r--  1 root root    0 Sep 10 17:22 today.txt
    -rw-r--r--  1 root root    0 Sep 10 17:22 tomorrow.txt

If everything is set up correctly, once you run `jfdi` once more, you will
get this message:

    [root@john.doe:~]# jfdi

    ### JFDI List For Today ###

       *Zero Inbox* for today! Hooray!

       Sample Usage:
           Add a Goal       : jfdi [-a] "Save the world; one goal at a time."
           List Goals       : jfdi -l
           List All Commands: jfdi -h

Which means that you are all set! Congratulations!

## Usage

### Displaying Help

    [root@john.doe:~]# jfdi -h

### Adding a Goal

Use

    [root@john.doe:~]# jfdi Save the cheerleader, save the world.

Or you can use quotes if you have special characters in your goal:

    [root@john.doe:~]# jfdi "Save the cheerleader, (save the world)."

Here is a sample response:

    [root@john.doe:~]# jfdi Save the cheerleader, save the world.

Will output the updated goals list.

    ### JFDI List For Today ###

    0 Save the cheerleader, save the world.

### Listing Goals

Just type `jfdi`.

    [root@john.doe:~]# jfdi

will output:

    ### JFDI List For Today ###

    ### JFDI List For Today ###

    0 learn kung-fu
    1 buy milk.
    2 Save the cheerleader, save the world.

### Deferring a Goal

Use `jfdi -d <goal id>`.

For the above list

    [root@john.doe:~]# jfdi -d 1

Will output:

    ### JFDI List For Today ###

    0 learn kung-fu
    1 Save the cheerleader, save the world.

(*note that "buy milk" goal for id 1 has been moved*)

### Listing Deferred Goals

Use `jfdi tomorrow`.

For the above case, using

    [root@john.doe:~]# jfdi tomorrow

will output:

    ### Upcoming JFDI Stuff ###

    0 buy milk.

### Moving a Goal Back to Today's Queue

Use `jfdi -e <id>`.

For the above **tomorrow** queue, using

    [root@john.doe:~]# jfdi -e 0

will output:

    ### JFDI List For Today ###

    0 buy milk.
    1 learn kung-fu
    2 Save the cheerleader, save the world.

You can see that "buy milk" goal has been moved to the top of your tomorrow's
queue.

### Marking a Goal as Done

It's as easy as `jfdi <id>`.

For the above example, using

    [root@john.doe:~]# jfdi 1

will output

    ### JFDI List For Today ###

    0 buy milk.
    1 Save the cheerleader, save the world.

Now you know kung fu!

### Searching for Goals

* Use `jfdi -f <phrase>` for today's goals.
* Use `jfdi -f <phrase> tomorrow` for tomorrow's goals.

For the above example

    [root@john.doe:~]# jfdi -f milk

or

    [root@john.doe:~]# jfdi -f "milk"

will output:

    ### "milk" for Today ###

    0 buy milk.

And

    [root@john.doe:~]# jfdi -f ponies tomorrow

will output:

    ### "ponies" for Tomorrow ###

    0 find ponies and rainbows

(*given that there exists such a goal in your tomorrow's queue*)

...

That's a basic summary of what you can do with **JFDI**. There are many
aliases to the above commands, so, for example, instead of using `jfdi -e <id>`
you can use `jfdi --expedite <id>`, too. Type `jfdi --help` for more information
on the available commands that you can use.

## Things to Be Implemented

* Listing "done" Goals
* Undoing a "done" Goal
* Prioritizing Goals
* [file an issue if you want more stuff](https://github.com/v0lkan/JFDI/issues/new)

## Versioning

Each functional change in **JFDI** code increments the version number.

The version of the project is maintained at `package.json`; and it has
`MAJOR.MINOR.PATCH` format.

* **MAJOR** version changes are breaking, incompatible API changes.
* **MINOR** version changes are **enhancements** and **new functionality**
that have been added in a non-breaking, backwards-compatible manner.
* **PATCH** version changes are non-breaking, backwards-compatibile
**bug fixes**.

With the following exception:

    Although the maintainers of this codebase will try to the best abilities
    not to introduce breaking changes, any version less than **1.0.0**
    are exempt from the above rules, and may introduce breaking changes at
    any time.

Each major version of **JFDI** will be maintained as tagged snapshots for
each version.

### How Do I Contribute?

**JFDI** is in active development, and any contribution is highly appreciated.

Contribution is simple. Just follow these steps:

1. Fork this repository;
2. Switch to the **develop** branch (`git checkout develop`);
2. Create a feature branch (`git checkout -b my-awesome-feature`);
3. Commit your changes (`git commit -am 'Added a greate feature.');
4. Push to the branch (`git push origin my-awesome-feature`);
5. Create a new pull requests.

## I Have A Question

[File and issue](https://github.com/v0lkan/JFDI/issues/new) or
[Send an e-mail to **volkan@o2js.com**](mailto:volkan@o2js.com).

## License

**JFDI** is distributed under the **MIT** license.
You can play with it however you like.

See [LICENSE.md](LICENSE.md) for details.

## Contact Information

**Project Owner**:  [Volkan Özçelik](http://volkan.io/) <volkan@o2js.com>.

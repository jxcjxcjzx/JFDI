> **NOTE**
>
> This project is no longer maintained (*at least for a while*).
>
> If you want to be the maintainer, contact me
> at me@volkan.io
>

![JFDI Travis CI Build Status](https://api.travis-ci.org/v0lkan/JFDI.png) &nbsp;
![JFDI NPM version](https://badge.fury.io/js/jfdi.png)

**Table of Contents**

- [A Hacker's Way of Getting $#!% Done](#a-hackers-way-of-getting--done)
    - [Every Saga Has a Beginning](#every-saga-has-a-beginning)
    - [Why a Command Line Interface?](#why-a-command-line-interface)
        - [Why "Right Now"?](#why-right-now)
    - [It is Plain Text Files, Baby!](#it-is-plain-text-files-baby!)
    - [When You Don't Have Access to `jfdi` CLI](#when-you-dont-have-access-to-jfdi-cli)
    - [Supported Platforms](#supported-platforms)
    - [Project Directory Structure](#project-directory-structure)
    - [Where Can I Get Help?](#where-can-i-get-help)
    - [Where Is the Documentation?](#where-is-the-documentation)
    - [How Do I Setup **JFDI**?](#how-do-i-setup-jfdi)
        - [Setup for Linux / Mac](#setup-for-linux--mac)
        - [Setup for Windows](#setup-for-windows)
    - [Configuration](#configuration)
    - [Usage](#usage)
        - [Displaying Help](#displaying-help)
        - [Adding a Goal](#adding-a-goal)
        - [Listing Goals](#listing-goals)
        - [Deferring a Goal](#deferring-a-goal)
        - [Appending Text to a Goal](#appending-text-to-a-goal)
        - [Prepending Text to a Goal](#prepending-text-to-a-goal)
        - [Replacing Text within a Goal](#replacing-text-within-a-goal)
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

It all started with [the **JFDI** Methodology](https://gist.github.com/v0lkan/2694911) and [the **JFDI** Manifesto](https://gist.github.com/v0lkan/2731233).

> In a nutshell, **JFDI** is a *command line interface* to help you focus what goals you can achieve **right now**.

## Why a Command Line Interface?

Because, we geeks live in the terminal.

Using something that is already running, and is most of the time available in front of your eyes, will help you **overcome the inertia** of launching a separate app to manage your goals &ndash; Here's why:

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
> If after all that hassle, you will still need to click an "add task" button, just to add a simple goal, than it is **too much work already**.

And when it is **too much work**, your subconscious will resist to use that app **forever**.

* That's why there are **hundreds** of **TODO** applications out there, which people have hard time habituating;
* And that's why the majority of people are not satisfied with their "*task management software*".

> Now compare how you would **JFDI**, instead:
>
>     Type your goal, hit _enter_ and bang!* it's there.
>
> \* *Yes, this does make a "bang!" sound effect in your mind ;).*

No process can be less interruptive, and faster!

The main aim of the application is to help you accomplish **what need to be get done today**, with as little distraction as possible.

So unlike other productivity <stike>pr\*n</stike> apps, you will not find dates, schedules, reminders, labels&hellip; to distract you away in **JFDI**.

### Why "Right Now"?

Because it's f\*cking " **JFDI** " !

> Planning Is a Bummer!

Admit it, most of the time you don't plan launching a manless spaceship to the moon. Your typical **runway** is something like&hellip;

* Fix bug id UNP9959: "Unicorns and ponies should live together".
* Remember the milk.
* Save the world.

> Why torture your brain by setting *due dates* weeks from now to those simple tasks?!

**JFDI** what you can do **right now**, and *bump* the rest to **tomorrow**.

## It is Plain Text Files, Baby!

Do you know what is universally reachable, and modifiable, without needing to download any special software?

> A plain text file!

You can edit your text file on your Mac, on your PC, on your smart phone, on your tablet, on Mars, and on the moon&hellip;

Moreover, text files are damn fast to edit; **they do not distract you**.

What **JFDI** does is similar:

> **JFDI** maintains *plain text files* in a **synchronization** directory of your choice.

If you set your **synchronization** directory to something like:

`/home/procrastinator/Dropbox/JFDI/`

given that */home/procrastinator/Dropbox/* is your [Dropbox][dropbox] folder, **JFDI** will put three text files to that folder:

* **today.txt**,
* **tomorrow.txt**,
* and **done.txt**;

then you can edit these files wherever you want.

And once you are done, they will be synchronized **everywhere**.

[dropbox]: http://dropbox.com/

## When You Don't Have Access to `jfdi` CLI

Since those files are plain text files, you can use **any text editor** to modify them even if you don't have access to `jfdi` command line interface.

> Since **JFDI** data files are plain text files, they are universally portable.
>
> For instance you can use an editor like [textastic][textastic] to edit your goal list on your smart phone or tablet, and then when you are back in front of your computer, you can use `jfdi` to modify those files from where you left.

**JFDI** gives you the liberty to modify your files however you like.

It only has a single requirement:

    Keep each goal on a separate line.

It will play nicely, as long as you remember to **keep each goal on its own line**.

And as long as you follow this simple rule, you can edit your text files in whichever text editor you like, and when you run `jfdi` again, it will catch up and parse the files properly.

[textastic]: http://www.textasticapp.com/

## Supported Platforms

> **JFDI** does not have any platform-specific dependencies.

You should be able to run it on **any platform that supports Node.JS**.

It should work properly in all major **Windows**, **Mac OSX**, and **Linux** platforms.

If you face any particular issue with your platform [file an issue][issue].

## Project Directory Structure

The directory structure of the project is as follows:

* **test**: Unit tests.
* **lib**: Helper modules.
* **i18n**: Localization (*not implemented yet*)
* **config**: Custom configuration (*not implemented yet*)
* **data**: Configuration folder (*do not touch*).
* *index.js*: The entry point of the program.
* *README.md*: This file you are looking at.
* *CHANGELOG.md*: Things that has been done so far.
* *LICENSE.md*: Boring copyright stuff.
* *package.json*: npm package information.

## Where Can I Get Help?

Here are the places you can get help:

* If you are experiencing a problem, or if you have found a bug, or if you want
some cool sh\*t to be implemented [you can file an issue][issue];
* If you want to figure out how a specific command works, this README that you
are reading right now will be helpful;
* And you can always [send an e-mail to **volkan@o2js.com**][me].

## Where Is the Documentation?

Currently the only documentation is this **README** file that you are looking at. It will be regularly updated as new features are added to the project.

> You can also get command line help if you type `jfdi -h` or `jfdi --help` in the console.

In addition to this **README** file, you can also read [this o2js.com blog post][o2-done] for usage examples, and installation details.

...

> If you write reviews in your blog, [send an e-mail to **volkan@o2js.com**][me] and it will be cited here, as an additional resource, ASAP.

[o2-done]: http://o2js.com/jfdi-a-hackers-way-to-get-stuff-done

## Can I Get the **Cutting-Edge** Version?

If you are okay to trade up slight unstability for added coolness, additional commands and more features; then you might want to check out [the **develop** branch][develop].

[The develop branch][develop] is more frequently updated than the master branch. You will probably have a "mostly working" app, with incomplete tests.

> Any code that breaks the tests are generally not pushed to develop, therefore [the **develop** branch][develop] is generally safe with missing tests and documentation.

To use the **develop** branch, `git clone` and `npm link` it as follows:

    [root@john.doe:~]#git clone https://github.com/v0lkan/JFDI.git
    [root@john.doe:~]#git checkout develop
    [root@john.doe:~]#cd JFDI
    [root@john.doe:~]#npm link

If you have issues setting up the **develop** version, [send an e-mail to **volkan@o2js.com**][me].

[develop]: https://github.com/v0lkan/JFDI/tree/develop

## How Do I Setup **JFDI**?

Setting up your **JFDI** environment is easy.

### Setup for Linux / Mac

You should have [Node.JS](http://nodejs.org/) installed, first.

Once you have **Node.JS** installed, just run:

    sudo npm install -g jfdi

in your terminal, and you will have **JFDI** installed globally.

### Setup for Windows

It is similar to Linux setup. After having installed **Node.JS**, just run.

    npm install -g jfdi

in the command prompt, and you are done.

## Configuration

> **Tip**:
>
> For Linux users setting up an alias like `alias j="sudo jfdi";` may save you a few keystrokes.

> **Tip**:
>
> You might need root privileges to use **JFDI**.
>
> If the command examples given below do not work for you, replace `jfdi` with `sudo jfdi`, and try them again.
>
> If they still fail, [file a bug report][issue].

To configure your **JFDI**, just type `jfdi` to the terminal.

    [root@john.doe:~]# jfdi

And you will get a prompt similar to this:

    ### Set Your JFDI for the First Time ###

        It looks like this is the first time you are using JFDI.
        Don't worry, it's easy.

        The only thing you need to configure is a folder to
        store your JFDI data.

        Where do you want to store your JFDI data?
        Enter the full path ( like: /home/ninja/Dropbox/JFDI/ ).

    prompt: path:

Just type in the **full path** of a valid folder on your system.

    prompt: path:  /home/procrastinator/Dropbox/JFDI/

and then press enter. You will get the following notification upon success:

    ### Yay! ####

        Ready to go! You can use JFDI now.

        Visit

        https://github.com/v0lkan/JFDI/blob/master/README.md

        for usage examples.

You can further verify everything is set up by checking your **JFDI** data directory:

    [root@john.doe:~]# ls /root/Dropbox/JFDIExample/ -al
    total 8
    drwxr-xr-x  2 root root 4096 Sep 10 17:22 .
    drwx------ 11 root root 4096 Sep 10 13:50 ..
    -rw-r--r--  1 root root    0 Sep 10 17:22 done.txt
    -rw-r--r--  1 root root    0 Sep 10 17:22 today.txt
    -rw-r--r--  1 root root    0 Sep 10 17:22 tomorrow.txt

If everything is set up correctly, once you run `jfdi` once more, you will get the following message:

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

> **Tip**:
>
> This quotation feature works similar in all other **JFDI** commands too. So if you have special text which might be parsed as a command, just put it inside quotes to use it.

Here is a sample response:

    [root@john.doe:~]# jfdi Save the cheerleader, save the world.

The above command will output the updated goals list.

    ### JFDI List For Today ###

    0 Save the cheerleader, save the world.

### Listing Goals

Just type `jfdi`.

    [root@john.doe:~]# jfdi

The above command will output:

    ### JFDI List For Today ###

    0 learn kung-fu
    1 buy milk.
    2 Save the cheerleader, save the world.

### Deferring a Goal

Use `jfdi -d <goal id>`.

For the above list of goals, using

    [root@john.doe:~]# jfdi -d 1

will output:

    ### JFDI List For Today ###

    0 learn kung-fu
    1 Save the cheerleader, save the world.

(*note that "buy milk" goal for id 1 has been moved*)

### Appending Text to a Goal

Use `jfdi -m <goal id> -D "<text to append>"`.

Note that you will need to enclose your text in quotes ("") if it has multiple words.

You can also use the parameters in their long forms:

    jfdi --append <goal id> --text "<text to append>"

As in:

    jfdi --append 1 --text " Save the universe, too."

### Prepending Text to a Goal

Use `jfdi -m <goal id> -D "<text to append>"`.

Note that you will need to enclose your text in quotes ("") if it has multiple words.

You can also use the parameters in their long forms:

    jfdi --append <goal id> --text "<text to append>"

As in:

    jfdi --append 1 --text "Find the cheerleader. "

### Replacing Text within a Goal

Use `jfdi -r <goal id> -D "<text to replace>" -w "<replacement>"`. You can also use the parameters in their long forms:

    jfdi --replace <goal id> --text "<text to replace>" --with "<replacement>"

As in:

    jfdi --replace 1 --text "Cheerleader" --with "Blonde Immortal Cheerleader"

> **Hint**:
>
> The `--replace` parameter accepts regular expressions too.
> So you can use something like
>
>     `jfdi --replace 1 --text "Ch.{2,2}rl[ea][ea]d.r" --with "Blonde Immortal Cheerleader"`
>
> and do the same replacement.

### Listing Deferred Goals

Use `jfdi tomorrow`.

For the above **today** queue, using

    [root@john.doe:~]# jfdi tomorrow

will output something similar to the following:

    ### Upcoming JFDI Stuff ###

    0 buy milk.

### Moving a Goal Back to Today's Queue

Use `jfdi -e <id>`.

For the above **tomorrow** queue, using

    [root@john.doe:~]# jfdi -e 0

will output

    ### JFDI List For Today ###

    0 buy milk.
    1 learn kung-fu
    2 Save the cheerleader, save the world.

You can see that "buy milk" goal has been moved to the top of your **tomorrow**
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

For the above goals list,

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

That's a basic summary of what you can do with **JFDI**. There are many aliases to the above commands; so, for example, instead of using `jfdi -e <id>` you can use `jfdi --expedite <id>`, too. Type `jfdi --help` for more information on the available commands that you can use.

## Things to Be Implemented

See the [issue list][issues] for what's coming up next.

> **Hint**:
>
> [file an issue if you want more stuff][issue].

[issues]: https://github.com/v0lkan/JFDI/issues

## Versioning

Each functional change in **JFDI** code increments the version number.

The version of the project is maintained at `package.json`; and it has `MAJOR.MINOR.PATCH` format.

* **MAJOR** version changes are breaking, incompatible API changes.
* **MINOR** version changes are **enhancements** and **new functionality** that have been added in a non-breaking, backwards-compatible manner.
* **PATCH** version changes are non-breaking, backwards-compatibile **bug fixes**.

With the following exception:

> Although the maintainers of this codebase will try to the best abilities not to introduce breaking changes, any version less than **1.0.0** are exempt from the above rules, and may introduce breaking changes at any time.

Each major version of **JFDI** will be maintained as tagged snapshots for each version.

## Deployment Policy

* Everything is implemented and tested on the **develop** branch first;
* Then unit tests are written on the **develop** branch for the changes;
* Once the [CI][travis] is **all green**, **develop** branch is merged into **master**.
* Once the **master** gives all green on the on the **CI** too, then the final module is `npm publish`ed.

[travis]: https://travis-ci.org/v0lkan/JFDI

## How Do I Contribute?

**JFDI** is in active development, and any contribution is highly appreciated.

Contribution is simple. Just follow these steps:

1. Fork this repository;
2. Switch to the **develop** branch (`git checkout develop`);
2. Create a feature branch (`git checkout -b my-awesome-feature`);
3. Commit your changes (`git commit -am 'Added a great feature.');
4. Push to the branch (`git push origin my-awesome-feature`);
5. Create a new pull requests.

## I Have A Question

[File an issue][issue] or [Send an e-mail to **volkan@o2js.com**][me].

## License

**JFDI** is distributed under the **MIT** license.
You can play with it however you like.

See [LICENSE.md][license] for details.

## Contact Information

**Project Owner**:  [Volkan Özçelik][volkan.io] <volkan@o2js.com>.

[volkan.io]: http://volkan.io/
[me]: mailto:volkan@o2js.com
[license]: https://github.com/v0lkan/JFDI/blob/master/LICENSE.md
[issue]: https://github.com/v0lkan/JFDI/issues/new


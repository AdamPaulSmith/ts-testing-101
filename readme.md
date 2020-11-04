# ts-testing-101
This is a sample project that shows you how to get going with Node.js, TypeScript and use Jest as a testing framework. For a TLDR jump to the bottom of this document which details the commands and steps without all the description text.

## Environment Setup
You will need node.js installed at a minimum to get this running. You can find the version of node you need [here](https://nodejs.org/) at Nodes official site.

Once you have node installed, navigate to the directory you want your solution to be located and execute the following command:

`npm init`

This will ask you a series of questions that help define the metadata and default running commands for your solution. These are put in a file called `package.json`. If you want to execute the command and accept the defaults, make sure you are in the folder that has an acceptable name for your project and execute the following command:

`npm init -y`

This will create the node configuration file with default values. This is normally good enough to get going with.

## Baseline development dependencies

Once you have the project setup for node development, you need to tell it you want to use TypeScript. Execute the following command to download and install the baseline development dependencies:

`npm i -D typeScript @types/node`

This will install TypeScript and the types that allow you to write a node application.

Once TypeScript is installed you need to initialise it to tell it how to behave. Execute the following command to add a default configuration:

`npx tsc --init`

This will create `tsconfig.json`. This file tells TypeScript how to behave when it is run. 

You can get going with development right now if you like, but there are a couple of settings I change before I get going with test driving my code.

## Defining the root (source) directory

I normally place my code in a `src` folder in the root directory. You need to tell TypeScript this. Open up `tsconfig.json` and find the key called `rootDir`. Uncomment the line and update the value to `"./src"`. When the tsc runtime [transpiles](https://en.wikipedia.org/wiki/Source-to-source_compiler) the code and it will use this value as the directory to find all your TypeScript (and other code). 

## Defining the folders TypeScript uses

When `tsc` is run it transpiles any .ts files in the value defined against the `rootDir` key. If you do not set an output directory it will transpile the .ts files into .js files and put them in the same directory. This can get confusing fast so the best thing to do is set an output directory. 

Have a look in the `tsconfig` file and find the key called `outDir`. As the `rootDir` line, uncomment it and update the value to `./bin`. Now when `tsc` is run it will transpile the code into this folder. No need to create it, `tsc` will generate the folder if it does not exist.

## Installing testing dependencies

One final thing to do before you can get to writing code is install the test runner. [Jest](https://Jestjs.io) is a popular test runner that also has support for TypeScript. To install Jest and the TypeScript type files execute the following command:

`npm i -D jest ts-jest @types/jest`

This installs:
1. The Jest framework
2. The Jest TypeScript framework
3. The TypeScript types for Jest

## Initialising and configuring Jest

Before you use Jest, it is a good idea to set it up for the environment. Run the following command to create a default Jest configuration file:

`npx ts-jest config:init`

This will create a `jest.config.js` file. Note I am executing ts-Jest and not jest directly. If you initialise with the Jest command the solution will not be set up to execute TypeScript test files and will only execute .js files which we should not be writing as we are using TypeScript.

## Naming your test files

Dependant on what I am doing I may put more than one test in a test file. By default, `ts-jest` (and Jest) only picks up on files with the word `test` in them as defined by the default search pattern [here](https://Jestjs.io/docs/en/configuration#testmatch-arraystring). If the test file has more than one test in it should have a `tests` in the file name. All we need to do is add a setting to the `jest.config.js` file. Add a `testMatch` key value pair (kvp) to the object in the file as defined below:

`testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test|tests).[jt]s?(x)" ]`

This is the default regex plus and or expression adding the word "tests".

## Configure TypeScript to not copy test files to the bin directory
When `tsc` is executed it will transpile all .ts files by default unless you configure it otherwise. This means it will pull over alld files including your tests to the bin directory. To stop this, add the following two kvp's after the compilerOptions kvp in `tsconfig.json` file to stop it transpiling your test .ts files and outputting them in the bin directory:

```
  "include": [
    "src/**/*/"
  ],
  "exclude": [
    "src/**/*test*",
    "src/**/*tests*"
  ]
```

## Next Steps 1

You are now ready to get coding! Look in the src folder of this solution to see an example of testing a calculator add function. Type `npx tsc` in the root folder to transpile the code and `npx jest` to run the test.

## Next Steps 2

If you want a 101 on coding with TypeScript I have found [Ben Awad's YouTube channel](https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw) an excellent resource. [This video](https://www.youtube.com/watch?v=1UcLoOD1lRM&list=LLP-BffksU59nSrEAbB1TMtw&index=8&t=0s) in particular was especially helpful to me.

## TLDR
The commands to get you going with a Node.js project that supports TypeScript using Jest as a testing framework:

1. Open a Terminal/Command Line
2. Navigate to the folder you want your solution to reside in
3. Initialise npm: `npm init -y`
4. Add all development dependencies: `npm i -D typescript jest ts-jest @types/node @types/typescript @types/jest`
5. Initialise TypeScript: `npx tsc --init`
6. Update TypeScript's config file for its source code and bin output folders. Open `tsconfig.json` and add the following 2 kvp's to the `compilerOptions` value object: 
    `"outDir": "./bin", "rootDir": "./src"`
7. Update TypeScript's config so it doesn't transpile test files. Open `tsconfig.json` and add the following 2 kvp's:
`
  "include": [
    "src/**/*/"
  ],
  "exclude": [
    "src/**/*test*",
    "src/**/*tests*"
  ]
`
8. Create a `src` folder in your root directory.
9. Initialise Jest: `npx ts-jest config:init`
10. Update Jests config. Open `jest.config.js` and add the following kvp: 
`testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test|tests).[jt]s?(x)" ]`

You are good to go!

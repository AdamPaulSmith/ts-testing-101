# ts-testing-101
This is a sample project that shows you how to get going with Node.js, TypeScript and add use Jest as a testing framework. For a TLDR jump to the bottom of this document which details the commands and steps without all the description text.

## Environment Setup
You will need node.js installed at a minimum to get this running. You can find the version of node you need [here](https://nodejs.org/) at Nodes official site.

Once you have node installed, navigate to the directory you want your solution to be located and execute the following command:

`npm init`

This will ask you a series of questions that help define the metadata and default running commands for your solution. These are put in a file called `package.json`. If you want to execute the command and accept the defaults, make sure you are in the folder that has an acceptable name for your project and execute the following command:

`npm init -y`

This will create the node configuration file with default values. This is normally good enough to get going with.

## Baseline development dependencies

Once you have the project setup for node development, you need to tell it you want to use TypeScript. Execute the following command to download and install the baseline development dependencies:

`npm i -D TypeScript @types/node`

This will install TypeScript and the types that allow you to write a node application.

Once TypeScript is installed you need to initialise it to tell it how to behave. Execute the following command to add a default configuration:

`npx tsc --init`

This will create `tsconfig.json`. This file tells TypeScript how to behave when it is run. 

You can get going with development right now if you like but there are a couple of settings I like to change before I get going with test driving my code.

## Defining the root (source) directory

I normally place my code in a `src` folder in the root directory. You need to tell TypeScript this. Open up `tsconfig.json` and find the propery called `rootDir`. Find the line, uncomment it update the value field to `"./src"`. When the tsc runtime [transpiles](https://en.wikipedia.org/wiki/Source-to-source_compiler) the code and it will use this value as the directory to find all your TypeScript (and other code). 

## Defining the folders TypeScript uses

When the TypeScript command line tool is run it transpiles any .ts files in the `rootDir` key, value field defined above. If you do not set an output directory it will transpile the .ts files into .js files and put them in the same directory. This can get confusing fast so the best thing to do is set an output directory. 

Have a look in the `tsconfig` file and find the property called `outDir`. As the `rootDir` line, uncomment it but this time update the value to `./bin`. Now when `tsc` is run it will transpile the code into this folder. No need to create it, `tsc` will generate the folder if it does not exist.

## Installing testing dependencies

One final thing to do before you can get to writing code is install the test runner. [Jest](https://Jestjs.io) is a popular js runner that also has support for TypeScript. To install Jest and the TypeScript support files execute the following command:

`npm i -D jest ts-jest @types/jest`

This installs:
1. The Jest framework
2. The Jest TypeScript framework
3. The TypeScript types for Jest

## Initialising and configuring Jest

Before you use Jest it is a good idea to set it up for the envionment. Run the following command to create Jest's configuration file:

`npx ts-jest config:init`

This will create a boilerplate `jest.config.js` file. Note I am executing ts-Jest and not Jest. If you initialise with the Jest command the solution will not be set up to execute TypeScript test files and will only execute .js files which we should not be writing as we are using TypeScript.

## Naming your test files

Dependant on what I am doing I may put more than one test in a test file. By defualt ts-Jest (and I am assuming Jest) only picks up on files with the word `test` in them as defined by the default search pattern [here](https://Jestjs.io/docs/en/configuration#testmatch-arraystring). If the test file has more than one test in it it should have a `tests` in the file name. All we need to do is add a setting to the `jest.config.js` file. Add a `testMatch` key value pair to the object in the file as defined below:

`testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test|tests).[jt]s?(x)" ]`

This is the default regex plus the word "tests".

## Next Steps 1

You are now ready to get coding! Look in the src folder of this solution to see an example of testing a calculator add funtion. Type `tsc` in the root foler to transpile the code and `npx jest` to run the test.

## Next Steps 2

If you want a 101 on coding with TypeScript I have found [Ben Awad's YouTube channel](https://www.youtube.com/channel/UC-8QAzbLcRglXeN_MY9blyw) an excellent resource. [This video](https://www.youtube.com/watch?v=1UcLoOD1lRM&list=LLP-BffksU59nSrEAbB1TMtw&index=8&t=0s) in particular was especially helpful to me.

## TLDR
The commands to get you going with a Node.js project that supports TypeScript using Jest as a testing framework:

1. Navigate to the folder you want your solution to reside in
2. Initialise npm: `npm init -y`
3. Add all development dependencies: `npm i -D typescript jest ts-jest @node @typescript @Jest`
4. Initialise TypeScript: `npx tsc init`
5. Update TypeScripts config file. Open `tsconfig.json` and add the following 2 Key Value Pairs: 
    `"outDir": "./bin", "rootDir": "./src"`
6. Create a `src` folder in your root diredctory.
7. Initalise Jest: `npx ts-jest config:init`
8. Update Jests config. Open `jest.config.js` and add the following Key Value Pair: `testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test|tests).[jt]s?(x)" ]`

You are good to go!
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let buffer1 = '';
let buffer2 = '';
let buffer3 = '';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
    // Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('multiple-copy-paste" is now active........');

    //
	const copySelection1 = vscode.commands.registerCommand('multiClipboard.copySelection1', () => {
       
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.document.getText(editor.selection);
           // console.log(`Selected text for buffer 1: ${selection}`);
            buffer1 = selection;
            vscode.window.showInformationMessage('Copied to buffer 1');
        } else {
            console.log('No active editor found for copySelection1');
        }
    });

    const copySelection2 = vscode.commands.registerCommand('multiClipboard.copySelection2', () => {
        console.log('Command "multiClipboard.copySelection2" triggered');
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.document.getText(editor.selection);
           // console.log(`Selected text for buffer 2: ${selection}`);
            buffer2 = selection;
            vscode.window.showInformationMessage('Copied to buffer 2');
        } else {
            console.log('No active editor found for copySelection2');
        }
    });

    const copySelection3 = vscode.commands.registerCommand('multiClipboard.copySelection3', () => {
        console.log('Command "multiClipboard.copySelection3" triggered');
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.document.getText(editor.selection);
           // console.log(`Selected text for buffer 3: ${selection}`);
            buffer3 = selection;
            vscode.window.showInformationMessage('Copied to buffer 3');
        } else {
            console.log('No active editor found for copySelection3');
        }
    });

    const pasteSelection1 = vscode.commands.registerCommand('multiClipboard.pasteSelection1', () => {
        console.log('Command "multiClipboard.pasteSelection1" triggered');
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            //console.log(`Pasting from buffer 1: ${buffer1}`);
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, buffer1);
            });
        } else {
            console.log('No active editor found for pasteSelection1');
        }
    });

    const pasteSelection2 = vscode.commands.registerCommand('multiClipboard.pasteSelection2', () => {
        console.log('Command "multiClipboard.pasteSelection2" triggered');
        const editor = vscode.window.activeTextEditor;
        if (editor) {
           // console.log(`Pasting from buffer 2: ${buffer2}`);
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, buffer2);
            });
        } else {
            console.log('No active editor found for pasteSelection2');
        }
    });
    const pasteSelection3 = vscode.commands.registerCommand('multiClipboard.pasteSelection3', () => {
        console.log('Command "multiClipboard.pasteSelection3" triggered');
        const editor = vscode.window.activeTextEditor;
        if (editor) {
           // console.log(`Pasting from buffer 3: ${buffer3}`);
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, buffer3);
            });
        } else {
            //console.log('No active editor found for pasteSelection3');
        }
    });

    context.subscriptions.push(copySelection1, copySelection2, pasteSelection1, pasteSelection2,pasteSelection3);

	
}

// This method is called when your extension is deactivated
export function deactivate() {}

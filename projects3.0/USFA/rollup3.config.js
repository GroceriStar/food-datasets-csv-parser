// plugins that we are going to use
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
// import copy from 'rollup-plugin-copy-assets'
import builtins from 'rollup-plugin-node-builtins';
import babel from 'rollup-plugin-babel';
import notify from 'rollup-plugin-notify';
import pkg from './package.json';

// import cleanup from 'rollup-plugin-cleanup';
// https://github.com/mjeanroy/rollup-plugin-prettier
// https://gitlab.com/IvanSanchez/rollup-plugin-file-as-blob

const extensions = ['.js', '.json'];

'use strict';

const T = require('../source/terminal-screen');

const t = new T();

t.width = 10;
t.height = 10;

t.setWrap(true);
t.clear();
t.move(5, 9);
t.write(1234567890);

console.log('--', t.state.x, t.state.y);
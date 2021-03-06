// //////////////////////////////////////////////////////////////////////////////
//  Copyright (C) 2016-present
//  Licensed under the The MIT License (MIT)
//  https://choosealicense.com/licenses/mit/
//
//  Github Home: https://github.com/AlexWang1987
//  Author: alexwong
//  Date: 2018-01-02 20:48:31
//  Email: 1669499355@qq.com
//  Last Modified time: 2018-01-16 11:38:05 by {{last_modified_by}}
//  Description: futuquant-index
//
// //////////////////////////////////////////////////////////////////////////////

import phaser_react from '../index.js';

import A from './a';
import B from './b';
import C from './c';
import D from './d';

const game = new Phaser.Game(1920, 1080, Phaser.CANVAS, 'stage', null)

dragonBones.PhaserFactory.init(game);

const phaser_navigator = new phaser_react.PhaserNavigator();

phaser_navigator.reg('a', A)
phaser_navigator.reg('b', B)
phaser_navigator.reg('c', C)
phaser_navigator.reg('d', D)

game.state.add('phaser_navigator', phaser_navigator, true)

window.nav = phaser_navigator;

// setInterval(() => {
//   const url = ['a/b/c', 'a/b/d', 'b/c', 'd'][Math.floor(Math.random() * 1000) % 4]
//   phaser_navigator.goto(url)
// }, 4000)

setTimeout(() => {
  phaser_navigator.goto('c')
}, 1000)

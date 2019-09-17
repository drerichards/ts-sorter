"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharCollection = /** @class */ (function () {
    function CharCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
    };
    CharCollection.prototype.swap = function (leftIdx, rightIdx) {
        var chars = this.data.split('');
        var leftElem = chars[leftIdx];
        chars[leftIdx] = chars[rightIdx];
        chars[rightIdx] = leftElem;
        this.data = chars.join('');
    };
    return CharCollection;
}());
exports.CharCollection = CharCollection;

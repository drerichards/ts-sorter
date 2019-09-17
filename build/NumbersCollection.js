"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    };
    NumbersCollection.prototype.swap = function (leftIdx, rightIdx) {
        var leftElem = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = leftElem;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;

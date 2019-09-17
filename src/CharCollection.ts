export class CharCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    const chars = this.data.split('');
    const leftElem = chars[leftIdx];
    chars[leftIdx] = chars[rightIdx];
    chars[rightIdx] = leftElem;
    this.data = chars.join('');
  }
}

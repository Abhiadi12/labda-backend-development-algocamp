class ComplexNumber {
  private real: number;
  private imag: number;

  constructor(real: number, imag: number) {
    this.real = real;
    this.imag = imag;
  }

  display(): void {
    console.log(`${this.real} + i${this.imag}`);
  }

  add(c: ComplexNumber) {
    this.real += c.real;
    this.imag += c.imag;
  }

  multiply(c: ComplexNumber) {
    this.real = this.real * c.real - this.imag * c.imag;
    this.imag = this.real * c.imag + this.imag * c.real;
  }
}

let c1: ComplexNumber = new ComplexNumber(2, 3);
let c2: ComplexNumber = new ComplexNumber(1, 3);
c1.display();
c2.display();

c1.add(c2);
c2.multiply(c1);

c1.display();
c2.display();

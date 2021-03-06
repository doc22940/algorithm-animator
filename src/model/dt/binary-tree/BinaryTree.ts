import { Array$ } from 'js-corelib'
import { Algorithm } from '../../Algorithm'
import { BinaryTreeADT, TreeData } from '../../adt'

export class BinaryTreeAlgorithm<T> extends Algorithm<TreeData<T>, BinaryTreeADT<T>> {
  protected _generator: () => T
  protected _n = 10

  constructor(generator: () => T, compare?: (val1: T, val2: T) => number) {
    super(new BinaryTreeADT(compare))
    this._generator = generator
  }

  get data() {
    return this._adt.data
  }

  get n() {
    return this._n
  }

  set n(value: number) {
    this._n = Math.max(value, 1)
  }

  Init() {
    this._adt.Replace(Array$.Create(this._n, () => this._generator()), false)
    return this._adt.data
  }

  protected async RunCore(): Promise<any> {}
}


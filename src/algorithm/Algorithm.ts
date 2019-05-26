import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export class AlgorithmMixin extends Vue {
  @Prop({ default: 500 }) delay!: number
  @Prop({ default: false }) paused!: boolean

  async Continue() {
    return new Promise(resolve => {
      if (this.paused) {
        let handle = setInterval(() => {
          if (!this.paused) {
            clearInterval(handle)
            resolve()
          }
        }, 250)
      } else {
        resolve()
      }
    })
  }

  OnComplete() {
    this.$emit('complete')
  }

  PointCode(pointer: number) {
    this.$emit('point', pointer)
  }
}

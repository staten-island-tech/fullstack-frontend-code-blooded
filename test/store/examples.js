export const state = () => ({
  progress: 0,
  sample: 321,
  sample2: 543,
})

export const mutations = {
  setProgress(state, progress) {
    state.progress = progress
  },
  setSample(state, sample) {
    state.sample = sample
  },
  setSample2(state, sample2) {
    state.sample2 = sample2
  },
}

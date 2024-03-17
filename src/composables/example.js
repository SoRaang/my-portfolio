const exampleComposable = () => {
    const dataArray = ref([])
    const fetchError = ref(null)

    const load = async () => {
        try {
            let res = await fetch('/tempRestAPI')

            if (!!res === false) {
                throw Error('데이터 로드 실패')
            }

            dataArray.value = await res.json()
        } catch(err) {
            fetchError.value = err.message
        }
    }

    return { dataArray, err, load }
}

export default exampleComposable
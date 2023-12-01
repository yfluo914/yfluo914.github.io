Vue.component('data-center', {
    data: function () {
        return {
            loading: true,
            coloInfo: null,
            errorMessage: '',
            darkMode: false,
            ipAddress: null,
            warpStatus: null,
            tlsProtocol: null,
        };
    },
    created: function () {
        this.fetchDataCenterInfo();
        this.applyDarkMode();
    },
    watch: {
        darkMode: function () {
            this.applyDarkMode();
        }
    },
    methods: {
        async fetchDataCenterInfo() {
            try {
                const colosDataResponse = await fetch('colos.json');
                const colosData = await colosDataResponse.json();
                const traceResponse = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
                const traceText = await traceResponse.text();

                const traceLines = traceText.split('\n');
                traceLines.forEach(line => {
                    const [key, value] = line.split('=');
                    switch (key) {
                        case 'colo':
                            if (colosData[value]) {
                                this.coloInfo = colosData[value];
                            } else {
                                this.errorMessage = 'No matching Cloudflare data centre information found';
                            }
                            break;
                        case 'ip':
                            this.ipAddress = value;
                            break;
                        case 'warp':
                            this.warpStatus = value;
                            break;
                        case 'tls':
                            this.tlsProtocol = value;
                            break;
                        // ... 其他需要解析的字段
                    }
                });

            } catch (error) {
                this.errorMessage = 'Detection failed, please check network connection';
            }

            this.loading = false;
        },
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            this.applyDarkMode();
        },

        applyDarkMode() {
            document.body.style.backgroundColor = this.darkMode ? '#212529' : '#fff';
            document.body.style.color = this.darkMode ? 'white' : 'black';
        },
        flagUrl(countryCode) {
            return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${countryCode.toLowerCase()}.svg`;
        }
    },
    computed: {
        cardStyle: function () {
            return {
                backgroundColor: this.darkMode ? '#343a40' : '#fff',
                color: this.darkMode ? 'white' : 'black'
            };
        }
    },
    template: `
        <div class="text-center">
            <div class="mb-4 d-flex justify-content-between align-items-center">
                <div>
                    <img src="./favicon.ico" alt="Cloudflare Logo" style="height: 50px;">
                    <span style="font-size: 1.5rem; vertical-align: middle; margin-left: 10px;">Cloudflare Center Detector</span>
                </div>
                <i :class="['fas', darkMode ? 'fa-sun' : 'fa-moon', 'fa-2x']" @click="toggleDarkMode" style="cursor: pointer;"></i>
            </div>
            
            <div class="card mx-auto" :style="cardStyle" style="max-width: 500px;">
                <div class="card-body">
                    <div v-if="loading" class="spinner-grow text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div v-else-if="coloInfo" class="card-text">
                        <h5 class="mb-2">Data Centre Info:</h5>
                        <p><img :src="flagUrl(coloInfo.cca2)" alt="Flag" class="img-fluid mb-2" style="height: 20px;"> {{ coloInfo.region }} - {{ coloInfo.city }} ({{ coloInfo.cca2 }})</p>
                        <p v-if="ipAddress"><strong>IP Address:</strong> {{ ipAddress }}</p>
                        <p v-if="warpStatus"><strong>WARP Status:</strong> {{ warpStatus }}</p>
                        <p v-if="tlsProtocol"><strong>TLS Protocol:</strong> {{ tlsProtocol }}</p>
                    </div>
                    <p v-else>{{ errorMessage }}</p>
                </div>
            </div>

            <!-- Google 地图 -->
            <div v-if="coloInfo" class="card mx-auto mt-4" :style="cardStyle" style="max-width: 500px;">
                <div class="card-body">
                    <h5 class="card-title mb-3">Data Centre Location</h5>
                    <iframe
                        width="100%"
                        height="250"
                        frameborder="0" style="border:0"
                        :src="'https://www.google.com/maps?q=' + coloInfo.lat + ',' + coloInfo.lon + '&z=8&output=embed'"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    `
});

new Vue({ el: '#app' });

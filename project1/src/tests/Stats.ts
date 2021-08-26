import stats from 'three/examples/jsm/libs/stats.module'
import config from '@src/config';

export default class Stats {
    private readonly statsConfig = config.tests.stats;
    private stats: stats;

    constructor() {
        this.stats = stats();

        if(this.statsConfig.show) this.setRender();
    }

    public setUpdate(): void {
        if(!this.statsConfig.show) return;

        this.stats.update();
    }

    private setRender(): void {
        document.body.appendChild(this.stats.dom);
    }
}
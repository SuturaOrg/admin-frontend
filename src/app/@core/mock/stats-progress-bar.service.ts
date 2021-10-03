import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Nouveaux adhérents',
      value: 12,
      activeProgress: 70,
      description: 'Plus que la semaine passée (70%)',
    },
    {
      title: 'Nouvelles demandes de prêts',
      value: 4,
      activeProgress: 30,
      description: 'Plus que la semaine passée (30%)',
    },
    {
      title: 'Nouveaux Commentaires',
      value: 20,
      activeProgress: 55,
      description: 'Plus que la semaine passée (55%)',
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}

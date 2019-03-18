import { Component } from '@angular/core';
import { Car } from '../../interfaces/Car';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent{
  public isVisible = false;
    public myCar: Car = {
        carName: 'mercedes-benz',
        mileage: 290000,
        tankVolume: 90,
        currentFuelVolume: 20,
        specifications: [
          'Двигатель 2.2 дизель',
          'Максимальная скорость 245 км/ч',
          'Коробка передач автоматическая'
        ]
    };
    // constructor(mileage: number, currentFuelVolume: number) {
    //     this.myCar.mileage = mileage;
    //     this.myCar.currentFuelVolume = currentFuelVolume;
    // }
    public driveHandler(distance: number): void {
        if (!isFinite(distance) || distance <= 0){
            console.error('Нужно передавать положительное, конечное, не NaN число');
            return;
        }
        if (this.myCar.currentFuelVolume > 0){
            this.myCar.mileage += distance;
            this.myCar.currentFuelVolume -= 7;
        } else {
            console.log('Нужно заправится')
        }
        if (this.myCar.currentFuelVolume <= 7) {
            this.isVisible = true;
            alert('Топливо заканчивается. пора дозаправится');
        }
    }
    public refuel(amount: number): void {
        if (!isFinite(amount) || amount <= 0){
            console.error('Нужно передавать положительное, конечное, не NaN число');
            return;
        }
        if ((this.myCar.currentFuelVolume += amount) > this.myCar.tankVolume) {
            this.myCar.currentFuelVolume = this.myCar.tankVolume;
            alert('Бак полный');
            this.isVisible = false;
            return;
        }
        this.myCar.currentFuelVolume += amount;
    }
}


export class Weather {
  id: number;
  humidity: number;
  city_name: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  temp_feels: number;

  constructor(rawData: any) {
    this.id = rawData.id;
    this.temp = rawData.main.temp;
    this.temp_max = rawData.main.temp_max;
    this.temp_min = rawData.main.temp_min;
    this.humidity = rawData.main.humidity;
    this.city_name = rawData.name;
    this.temp_feels = rawData.main.feels_like;
  }
}

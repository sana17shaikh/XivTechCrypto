import { AppDispatch } from '../Store';
import { updatePrices } from '../Store/CryptoSlice';

class MockWebSocket {
  private intervalId: number | null = null;
  private dispatch: AppDispatch;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  connect(): void {
    if (this.intervalId !== null) return;
    
    this.intervalId = window.setInterval(() => {
      this.generatePriceUpdates();
    }, 1500) as unknown as number;
    
    console.log('MockWebSocket connected');
  }

  disconnect(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('MockWebSocket disconnected');
    }
  }

  private generatePriceUpdates(): void {
    this.dispatch(updatePrices());
  }
}

export default MockWebSocket;
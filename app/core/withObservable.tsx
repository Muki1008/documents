import * as React from 'react';
import { BehaviorSubject, Subscription } from 'rxjs';

export function withObservable<T, K, B>(subject: BehaviorSubject<T>, propsCallback: () => K) {
  // TODO: find properly type
  return (WrappedComponent: typeof React.PureComponent) => {
    return class extends React.PureComponent<B, {}> {
      private subscription: Subscription;
      constructor(props: B) {
        super(props);
        this.subscription = subject.subscribe(() => {});
      }

      public componentDidMount(): void {
        this.subscription = subject.subscribe(() => {
          this.forceUpdate();
        });
      }

      public componentWillUnmount() {
        this.subscription.unsubscribe();
      }

      public render() {
        return (
            <WrappedComponent
                {...this.props}
                {...propsCallback()}
            />
        );
      }
    };
  };
}

import * as React from 'react';
import {
  Facepile,
  IFacepileProps,
  PersonaInitialsColor
} from '../../../../index';

const facepileProps: IFacepileProps = {
  personas: [],
  showAddButton: true
};

export interface IFacepileAddFaceExampleState {
  props: IFacepileProps;
}

export class FacepileAddFaceExample extends React.Component<any, IFacepileAddFaceExampleState> {
  public constructor() {
    super();

    this.state = {
      props: facepileProps
    };
  }

  public render() {
    return (
      <div className='ms-FacePileBasicExample'>
        <Facepile {...this.state.props} />
      </div>
    );
  }
}
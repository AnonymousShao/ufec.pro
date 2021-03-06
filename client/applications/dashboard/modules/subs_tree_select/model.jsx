import React from 'react';
import { Subs } from 'ufec';
import { Wrapper, Piece, formWrapper } from 'client/components/components_for_subs';
import config from './config';

const TreeSelect = Subs.TreeSelect;

const Model = () =>
  (
    <Wrapper
      title={config.title}
      description={config.description}
      link={config.link}
    >
      {
        config.components.map((c, index) => {
          const Sub = formWrapper(TreeSelect, c);
          return (<Piece
            key={index}
            description={c.description}
          >
            <div id="modal-container" style={{ width: 300 }}><Sub /></div>
          </Piece>);
        })
      }
    </Wrapper>
  );

export default Model;

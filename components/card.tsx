import { WSAEOPNOTSUPP } from 'constants';
import React, { Component } from 'react';
import { Events } from '../shared/enums';

export interface CardConfig {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  clickCallback?: (id: string) => void;
}

export class Card extends React.Component<CardConfig, {}> {

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.props.clickCallback && this.props.clickCallback(this.props.id);
  }

  render() {

    return (
      <div className="transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer
        flex flex-col min-w-card max-w-card min-h-card bg-white shadow-lg rounded mb-4 mr-8"
        onClick={this.handleClick}>
        {/* image container */}
        <div>
          <img
            src={this.props.imageUrl}
            alt={this.props.imageAlt} />
        </div>

        {/* text container */}
        <div className="p-8">
          {/* title container */}
          <div className="font-title text-xl font-medium text-accent text-center mb-4">
            {this.props.title}
          </div>

          {/* description container */}
          <div className="font-body text-sm">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}
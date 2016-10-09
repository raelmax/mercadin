import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';


class ProductList extends Component {

  state = {
    dataSource: []
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    return (
      <div style={{margin: "0 20px"}}>
        <form>
          <AutoComplete
            ref={(c) => this.productNameInput = c}
            hintText="Queijo minas"
            floatingLabelText="Nome do Produto"
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            floatingLabelFixed={true}
            fullWidth={true} />
        </form>
      </div>
    );
  }
}

export default ProductList;

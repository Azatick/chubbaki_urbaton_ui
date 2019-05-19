import React from "react";

import uniq from "lodash/uniq";
import flattenDeep from "lodash/flattenDeep";
import isEmpty from "lodash/isEmpty";

import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";

import { AppState } from "src/types/appState";
import { closeGuide } from "src/redux/ducks/guide";
import { MaterialEnum } from "src/types/trashCan";
import { User } from "src/types/user";
import Button from "src/components/ui/Button";
import { WasteTakePoint } from "src/types/wasteTakePoint";

interface Props {
  open?: boolean;
  closeGuide?: () => void;
  showOnMap: (wasteTakePoint: WasteTakePoint) => void;
  user?: User;
}

interface State {
  material: MaterialEnum | string;
  category: string;
}

class GuideModal extends React.Component<Props, State> {
  state: State = {
    material: "",
    category: ""
  };

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    // @ts-ignore
    this.setState({ [name]: value });
  };

  closeModal = () => {
    const { closeGuide } = this.props;
    closeGuide && closeGuide();
    this.setState({ category: "", material: "" });
  };

  render() {
    const { open, user } = this.props;
    const { material, category } = this.state;
    let categories: string[] = [];
    if (user) {
      categories = uniq(
        flattenDeep(
          user.trashCans
            ? user.trashCans.map(v =>
                v.wasteCategories
                  .filter(w => w.material === material)
                  .map(w => w.name)
              )
            : []
        )
      ) as string[];
    }
    return (
      <Dialog open={!!open}>
        <DialogTitle>{"Помощник по сортировке мусора"}</DialogTitle>
        <DialogContent>
          <FormControl margin="dense" fullWidth>
            <InputLabel htmlFor="material">Материал мусора</InputLabel>
            <Select
              fullWidth
              value={this.state.material}
              onChange={this.handleChange}
              inputProps={{
                name: "material",
                id: "material"
              }}
            >
              <MenuItem value={MaterialEnum.Plastic}>Пластик</MenuItem>
              <MenuItem value={MaterialEnum.Carton}>Картон</MenuItem>
              <MenuItem value={MaterialEnum.Paper}>Бумага</MenuItem>
              <MenuItem value={MaterialEnum.Metal}>Метал</MenuItem>
              <MenuItem value={MaterialEnum.Glass}>Стекло</MenuItem>
              <MenuItem value={MaterialEnum.Batteries}>Батарейки</MenuItem>
              <MenuItem value={MaterialEnum.Clothes}>Одежда</MenuItem>
            </Select>
          </FormControl>
          <FormControl disabled={material === ""} margin="dense" fullWidth>
            <InputLabel htmlFor="category">Категория мусора</InputLabel>
            <Select
              fullWidth
              value={this.state.category}
              onChange={this.handleChange}
              inputProps={{
                name: "category",
                id: "category"
              }}
            >
              {!isEmpty(categories) ? (
                categories.map((category, index) => (
                  <MenuItem value={category} key={index}>
                    {category}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>Нет подходящих категорий</MenuItem>
              )}
            </Select>
          </FormControl>
          {material !== "" && isEmpty(categories) && (
            <DialogContentText>
              К сожалению, мы не нашли пункта утилизации рядом с Вами.
              Пожалуйста, выбросите мусор в общие отходы.
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button color="default" label="Закрыть" onClick={this.closeModal} />
          {category !== "" && !isEmpty(categories) && (
            <Button
              color="primary"
              label="Показать на карте"
              onClick={() => {
                this.closeModal();
                if (user) {
                  if (user.trashCans && user.trashCans[0]) {
                    this.props.showOnMap(user.trashCans[0].wasteTakePoint);
                  }
                }
              }}
            />
          )}
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(
  (state: AppState) => ({
    open: state.guide.open,
    user: state.auth.user
  }),
  {
    closeGuide
  }
)(GuideModal);
